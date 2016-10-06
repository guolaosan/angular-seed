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

    $scope.itemArray = [
        {id: 1, name: '赵晓光',domain:'电子'},
        {id: 2, name: '武超则',domain:'通讯'},
         {id: 90, name: '郑震湘',domain:'电子'},  
         {id: 91, name: '邵洁',domain:'电子'},
         {id: 92, name: '安永平',domain:'电子'},
         {id: 93, name: '鄢凡',domain:'电子'},
         {id: 94, name: '马鹏清',domain:'电子'},
         {id: 95, name: '许兴军',domain:'电子'},
         {id: 96, name: '胡又文',domain:'计算机'},
         {id: 97, name: '汤旸玚',domain:'计算机'},
         {id: 98, name: '张轶乾',domain:'计算机'},
         {id: 99, name: '刘洋',domain:'计算机'},
         {id: 100, name: '刘智',domain:'计算机'}, 
         {id: 101, name: '冯达',domain:'计算机'},
         {id: 102, name: '闻学臣',domain:'计算机'},
         {id: 103, name: '刘畅',domain:'计算机'},
         {id: 104, name: '符健',domain:'计算机'},
         {id: 105, name: '范国华',domain:'计算机'},
         {id: 106, name: '王喆',domain:'计算机'},
         {id: 107, name: '袁煜明',domain:'计算机'},
         {id: 108, name: '刘泽晶',domain:'计算机'},
         {id: 110, name: '于海宁',domain:'通讯'}, 
         {id: 111, name: '徐荃子',domain:'通讯'},
         {id: 112, name: '崔晨',domain:'通讯'},     
         {id: 113, name: '王大鹏',domain:'通讯'},
         {id: 114, name: '程成',domain:'通讯'},     
         {id: 115, name: '李亚军',domain:'通讯'},
         {id: 116, name: '马军',domain:'通讯'},
         {id: 117, name: '束海峰',domain:'通讯'},
         {id: 118, name: '樊鹏',domain:'通讯'},        
        {id: 3, name: '宋嘉吉',domain:'其他'},
        {id: 5, name: '邬博华',domain:'电力新能源'},
        {id: 10, name: '缴文超',domain:'非银金融'},
        {id: 11, name: '魏涛',domain:'非银金融'},
        {id: 12, name: '马鲲鹏',domain:'银行'},
        {id: 13, name: '刘章明',domain:'批发和零售贸易'},
        {id: 14, name: '董广阳',domain:'食品饮料'},
        {id: 15, name: '杨涛',domain:'非金属材料'},
        {id: 17, name: '马莉',domain:'纺织服装'},
        {id: 18, name: '朱纯阳',domain:'其他'},
        {id: 19, name: '沈涛',domain:'环保'},
        {id: 20, name: '裘孝锋',domain:'石油化工'},
        {id: 21, name: '王席鑫',domain:'基础化工'},
        {id: 24, name: '邹戈',domain:'非金属材料'},
        {id: 25, name: '徐春',domain:'家电'},
        {id: 26, name: '笃慧',domain:'钢铁'},
        {id: 27, name: '庞琳琳',domain:'其他'},
        {id: 28, name: '巨国贤',domain:'有色金属'},
        {id: 29, name: '黄守宏',domain:'其他'},
        {id: 32, name: '文浩',domain:'传播与文化'},
        {id: 33, name: '朱国广',domain:'其他'},
        {id: 34, name: '陈佳',domain:'其他'},
        {id: 35, name: '吴立',domain:'农林牧渔'},
        {id: 36, name: '冯福章',domain:'军工'}
    ];

    $scope.selected = { analyst: $scope.itemArray[0] };

    $scope.getEndDate = function(){
        var today = new Date();
        //timezone lag
        var dd = today.getDate()-5;
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var endDate = yyyy+"-"+mm+"-"+dd;
        return endDate;
        // return "2016-09-14";
    }

    $scope.getStartDate = function(){
        var today = new Date();
        var start = new Date();
        //13 is too long for executing by yahoo
        // start.setMonth(today.getMonth()-13)
        start.setMonth(today.getMonth()-9);
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
        // if($scope.code.startsWith("000001")){
        //     $scope.codex = "000001.SS"
        // }else if($scope.code.startsWith("60")){
        //     $scope.codex = $scope.code+".SS"
        // }else{
        //     $scope.codex = $scope.code+".SZ"
        // }

        // var url =   'https://query.yahooapis.com/v1/public/yql?' +
        //     'q=select * from yahoo.finance.historicaldata '+
        //     'where symbol = "' + $scope.codex + '" ' +
        //     'and startDate = "'+$scope.startDate+'" and endDate = "'+$scope.endDate+'"&' + 
        //     'format=json&diagnostics=true&' +
        //     'env=store://datatables.org/alltableswithkeys';

        // var encodedURI = encodeURI(url);

        // $http.get(encodedURI).success(function(data) {
        //     try{
        //         // $scope.response= JSON.stringify(data,null,Number(2));

        //         // console.log($scope.response);
        //         var quotes = data.query.results.quote,
        //             datat = [],
        //             i;

        //         for( i = quotes.length - 1; i >=0; i-- ) {
        //             datat.push([
        //                 ( new Date( quotes[ i ].Date ) ).getTime(),
        //                 parseFloat( quotes[ i ].Open )
        //             ]);
        //         }

        //         $scope.stockdata = datat;
        //         $scope.chartConfig.series = [];
        //         $scope.chartConfig.series.push({
        //         id: 'dataseries',
        //         data: datat
        //         });

        //         $scope.queryReport();
                
        //         return datat;

        //     }catch(e){
        //         $scope.response = JSON.stringify({error:"error from server side"});
        //     }

        // }).error(function(data){

        //       $scope.response = JSON.stringify({"error":"error from server side","data":data},null,Number(2));
        // });

    }

    $scope.constructLink = function(item){
        var t = item['datetime'].split('T');
        var d = t[0];
        var dd = d.replace(/-/g,'');
        var url = "http://data.eastmoney.com/report/"+dd+"/"+item['infoCode']+".html";
        return url;
    };

    $scope.queryReport = function(){
        var reporturl = "http://52.198.111.194:3000/author/"+$scope.selected.analyst.name;
        // var reporturl = "http://127.0.0.1:3000/author/"+$scope.selected.analyst.name;
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