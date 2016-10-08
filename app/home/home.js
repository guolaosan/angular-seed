'use strict';

angular.module('myApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeController'
      });
  })
  .controller('homeController', function($scope, $http){
  	$scope.code = "000001"
    $scope.codex = "000001.SS";
    $scope.analyst = '赵晓光';
    //52.198.111.194
    $scope.serverurl = 'http://10.254.145.220:3000/';

    $scope.itemArray = [
        {uid: 1, name: '赵晓光',domain:'电子'},
        {uid: 2, name: '武超则',domain:'通讯'},
    ];

    if(localStorage.getItem('anas')){
        $scope.itemArray = JSON.parse(localStorage.getItem('anas'));
    }else{
        $http.get($scope.serverurl+"ana").success(function(data) {
            localStorage.setItem('anas',JSON.stringify(data));
            $scope.itemArray = data;
        }).error(function(data){
          console.log("get analysts failed")
        });        
    }



    $scope.selected = { analyst: $scope.itemArray[0] };

    $scope.queryfromYahoo = function(){
        if($scope.code.startsWith("000001")){
            $scope.codex = "sh000001";
        }else if($scope.code.startsWith("60")){
            $scope.codex = "sh"+$scope.code;
        }else{
            $scope.codex = "sz"+$scope.code;
        }

        var url = 'http://web.ifzq.gtimg.cn/appstock/app/fqkline/get?_var=kline_dayqfq&param='+$scope.codex+',day,,,320,qfq';
        var encodedURI = encodeURI(url);

         $http.get(encodedURI).success(function(data) {
            try{
                var p = /kline_dayqfq=(.*)/
                var m = p.exec(data)
                var payload = m[1]
                var jload = JSON.parse(payload)
                var  datat = []
                for(var item in jload.data){
                    if("sh000001"==item || item.startsWith("sz399")){
                        for(var i = 0; i<jload.data[item].day.length;i++){
                            datat.push([
                                ( new Date( jload.data[item].day[ i ][0]) ).getTime(),
                                parseFloat( jload.data[item].day[ i ][2] )
                            ]);
                        }                        
                    }else{
                         for(var i = 0; i<jload.data[item].qfqday.length;i++){
                            datat.push([
                                ( new Date( jload.data[item].qfqday[ i ][0]) ).getTime(),
                                parseFloat( jload.data[item].qfqday[ i ][2] )
                            ]);
                        }                        
                    }

                }

                $scope.stockdata = datat;
                $scope.chartConfig.series = [];
                $scope.chartConfig.series.push({
                id: 'dataseries',
                data: datat
                });

                $scope.queryReport();
                
                return datat;

            }catch(e){
                $scope.response = JSON.stringify({error:"error from server side"});
                console.log("get data error")
            }

        }).error(function(data){

              $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
              console.log("parse data error")
        });

    }

    $scope.constructLink = function(item){
        var t = item['datetime'].split('T');
        var d = t[0];
        var dd = d.replace(/-/g,'');
        var url = "http://data.eastmoney.com/report/"+dd+"/"+item['infoCode']+".html";
        return url;
    };

    $scope.queryReport = function(){
        // var reporturl = "http://52.198.111.194:3000/author/"+$scope.selected.analyst.name;
        var reporturl = $scope.serverurl+"author/"+$scope.selected.analyst.name;
        $http.get(reporturl).success(function(data) {
            try{
                // console.log(data);
                var tdata = [];
                for (var i = 0; i <data.length; i++) {
                  var d = data[i];
                  if("000001" ==  $scope.code || $scope.code.startsWith("399")){
                    tdata.push({'x': new Date(d['datetime']).getTime(),'title': d['title'],'url':d['pdfurl']});
                  }else if(d['secuFullCode'].indexOf($scope.code)>-1){
                    tdata.push({'x': new Date(d['datetime']).getTime(),'title': d['title'],'url':d['pdfurl']});
                  }
                  
                }

                tdata.sort(function(a,b){
                    return a['x']-b['x'];
                })

                var anaseries = {
                    type: 'flags',
                    name: 'Flags on series',
                    data: tdata,
                    onSeries: 'dataseries',
                    shape: 'squarepin'
                };

                $scope.chartConfig.options.plotOptions={
                    flags:{
                        point:{
                        events:{
                            click:function(e){
                                e.preventDefault();
                                
                                var url = this.url;
                                
                                window.open(url,'_blank');
                            }
                        }
                        }
                    }
                },
                $scope.chartConfig.series = [];
                $scope.chartConfig.series.push({
                id: 'dataseries',
                data: $scope.stockdata
                });
                $scope.chartConfig.series.push(anaseries);

            }catch(e){
                $scope.response = JSON.stringify({error:"error from server side"});
            }
        }).error(function(data){

              $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
        });

    } 
  	
    $scope.chartConfig = {
        options: {
            chart: {
                zoomType: 'x'
            },
            navigator: {
                enabled: true
            }
        },
        series: [],
        title: {
            text: '分析师研报跟踪'
        },
        rangeSelector : {
            selected : 1
        },
        useHighStocks: true
    }

    $scope.queryfromYahoo();
});