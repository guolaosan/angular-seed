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

    var today = new Date();
    var dd = today.getDate()-1;
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var endDate = yyyy+"-"+mm+"-"+dd;
    $scope.endDate = endDate;
    $scope.codex = "000001.SS"
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
            'and startDate = "2015-08-01" and endDate = "'+$scope.endDate+'"&' + 
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
                // console.log(datat);
                $scope.stockdata = datat;
                $scope.chartConfig.series = [];
                $scope.chartConfig.series.push({
                id: 1,
                data: datat
                });
                return datat;

            }catch(e){
                $scope.response = JSON.stringify({error:"error from server side"});
            }
        }).error(function(data){

              $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
        });

        // return encodeURI( url );
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