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

    $scope.getEndDate = function(){
        var today = new Date();
        //timezone lag
        var dd = today.getDate()-2;
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var endDate = yyyy+"-"+mm+"-"+dd;
        return endDate;
    }

    $scope.getStartDate = function(){
        var today = new Date();
        var start = new Date();
        //13 is too long for executing by yahoo
        // start.setMonth(today.getMonth()-13)
        start.setMonth(today.getMonth()-12);
        var dd = start.getDate();
        var mm = start.getMonth(); //January is 0!
        var yyyy = start.getFullYear();
        var startDate = yyyy+"-"+mm+"-"+dd;
        return startDate;
    }

    $scope.endDate = $scope.getEndDate();
    $scope.startDate = $scope.getStartDate();

    $scope.queryfromYahoo = function(){
        if($scope.code.startsWith("000001")){
            $scope.codex = "000001.SS"
        }else if($scope.code.startsWith("60")){
            $scope.codex = $scope.code+".SS"
        }else{
            $scope.codex = $scope.code+".SZ"
        }

        var url =   'https://query.yahooapis.com/v1/public/yql?' +
            'q=select * from yahoo.finance.historicaldata '+
            'where symbol = "' + $scope.codex + '" ' +
            'and startDate = "'+$scope.startDate+'" and endDate = "'+$scope.endDate+'"&' + 
            'format=json&diagnostics=true&' +
            'env=store://datatables.org/alltableswithkeys';

        var encodedURI = encodeURI(url);

        $http.get(encodedURI).success(function(data) {
            try{
                // $scope.response= JSON.stringify(data,null,Number(2));

                // console.log($scope.response);
                var quotes = data.query.results.quote,
                    datat = [],
                    i;

                for( i = quotes.length - 1; i >=0; i-- ) {
                    datat.push([
                        ( new Date( quotes[ i ].Date ) ).getTime(),
                        parseFloat( quotes[ i ].Open )
                    ]);
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
            }

        }).error(function(data){

              $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
        });

        // return encodeURI( url );
    }

    $scope.constructLink = function(item){
        var t = item['datetime'].split('T');
        var d = t[0];
        var dd = d.replace(/-/g,'');
        var url = "http://data.eastmoney.com/report/"+dd+"/"+item['infoCode']+".html";
        return url;
    };

    $scope.queryReport = function(){
        var reporturl = "http://52.90.207.223:3000/author/"+$scope.analyst;
        $http.get(reporturl).success(function(data) {
            try{
                // console.log(data);
                var tdata = [];
                for (var i = 0; i <data.length; i++) {
                  var d = data[i];
                  tdata.push({'x': new Date(d['datetime']).getTime(),'title': d['title'],'url':$scope.constructLink(d)});
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
            rangeSelector: {
                enabled: true
            },
            navigator: {
                enabled: true
            }
        },
        series: [],
        title: {
            text: '分析师研报跟踪'
        },
        useHighStocks: true
    }

    $scope.queryfromYahoo();
});