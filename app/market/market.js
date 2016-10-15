'use strict';

angular.module('myApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('market', {
        url: '/market',
        templateUrl: '/market/market.html',
        controller: 'marketController'
      });
  })

.controller('marketController', function($scope, $http){
    //get shanghai and shenzhen close price since 2016-10-10
    var url = 'http://web.ifzq.gtimg.cn/appstock/app/fqkline/get?_var=kk&param=sh000001,day,2016-10-10,,10000,qfq';
    var encodedURI = encodeURI(url);

     $http.get(encodedURI).success(function(data) {
        try{
            var p = /kk=(.*)/
            var m = p.exec(data)
            var payload = m[1]
            var jload = JSON.parse(payload)
            var datat = []
            var dtseries = []
            for(var item in jload.data){
                if("sh000001"==item || item.startsWith("sz399")){
                    for(var i = 0; i<jload.data[item].day.length;i++){
                        datat.push(
                            parseFloat( jload.data[item].day[ i ][2] )
                        );
                        var date = new Date( jload.data[item].day[ i ][0]);
                        var d = date.getDate();
                        var m = date.getMonth() + 1;
                        var y = date.getFullYear();
                        dtseries.push(''+y+'-'+m+'-'+d);
                    }
                }

            }
            // $scope.chart2Config.series = [];
            //hardcode 2 means sh000001
            $scope.chart2Config.series[2].data = datat;
            $scope.chart2Config.xAxis[0].categories = dtseries;

        }catch(e){
            $scope.response = JSON.stringify({error:"error from server side"});
            console.log("get data error")
        }

    }).error(function(data){

          $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
          console.log("parse data error")
    });

    $scope.chart2Config = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '925竞价量---上证指数'
        },
        subtitle: {
            text: ''
        },
        xAxis: [{
            categories: ['2016-10-10','2016-10-11','2016-10-12','2016-10-13','2016-10-14'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            title: {
                text: '上证指数',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '925竞价量',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        //keep the order of sz925,sh925,and sh000001!!!
        series: [{
            name: '深圳 925竞价量',
            type: 'column',
            yAxis: 1,
            data: [6.47, 5.74, 7.71,3.89,6.37],
            tooltip: {
                valueSuffix: '亿'
            }

        }
        , {
            name: '上证 925竞价量',
            type: 'column',
            yAxis: 1,
            data: [4.70, 4.72, 6.27,3.50,4.81],
            tooltip: {
                valueSuffix: '亿'
            }

        }
        , {
            name: '上证指数',
            type: 'spline',
            data: [3048.14, 3065.25, 3058.50],
            tooltip: {
                valueSuffix: ''
            },
            color: Highcharts.getOptions().colors[3]
        }
        ]
    };

    var url925 = 'http://52.198.111.194:3000/925';
    var encodedURI925 = encodeURI(url925);

     $http.get(encodedURI925).success(function(data) {
        try{
            var sh925s = []
            var sz925s = []
            for(var i =0;i<data.length;i++){
            	sh925s.push(data[i]['shvol']);
            	sz925s.push(data[i]['szvol']);
            }
            $scope.chart2Config.series[0].data = sz925s;
            $scope.chart2Config.series[1].data = sh925s;
            //danger! strong assumption!!!
            // $scope.chart2Config.xAxis[0].categories = dtseries;

        }catch(e){
            $scope.response = JSON.stringify({error:"error from 925 server side"});
            console.log("get 925 data error")
        }

    }).error(function(data){

          $scope.response = JSON.stringify({"error":"error from 925 server side","data":data},null,Number(2));
          console.log("parse 925 data error")
    });    
});