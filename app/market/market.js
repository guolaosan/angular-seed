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
            categories: ['2016-10-10', '2016-10-11', '2016-10-12','2016-10-13'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '上证指数',
                style: {
                    color: Highcharts.getOptions().colors[1]
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
        series: [{
            name: '深圳 925竞价量',
            type: 'column',
            yAxis: 1,
            data: [6.47, 5.74, 7.71,3.89],
            tooltip: {
                valueSuffix: '亿'
            }

        }
        , {
            name: '上证 925竞价量',
            type: 'column',
            yAxis: 1,
            data: [4.70, 4.72, 6.27,3.50],
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
            }
        }
        ]
    };
});