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
        // {id: 1, name: '赵晓光',domain:'电子类'},
        // {id: 2, name: '武超则',domain:'通讯'},
        // {id: 3, name: '宋嘉吉',domain:'其他'},
        // {id: 5, name: '邬博华',domain:'电力新能源'},
        // {id: 10, name: '缴文超',domain:'非银金融'},
        // {id: 11, name: '魏涛',domain:'非银金融'},
        // {id: 12, name: '马鲲鹏',domain:'银行'},
        // {id: 13, name: '刘章明',domain:'批发和零售贸易'},
        // {id: 14, name: '董广阳',domain:'食品饮料'},
        // {id: 15, name: '杨涛',domain:'非金属材料'},
        // {id: 16, name: '马军',domain:'通讯'},
        // {id: 17, name: '马莉',domain:'纺织服装'},
        // {id: 18, name: '朱纯阳',domain:'其他'},
        // {id: 19, name: '沈涛',domain:'环保'},
        // {id: 20, name: '裘孝锋',domain:'石油化工'},
        // {id: 21, name: '王席鑫',domain:'基础化工'},
        // {id: 22, name: '鄢凡', domain: '电子类'},
        // {id: 23, name: '董瑞斌', domain: '电子类'},
        // {id: 24, name: '邹戈',domain:'非金属材料'},
        // {id: 25, name: '徐春',domain:'家电'},
        // {id: 26, name: '笃慧',domain:'钢铁'},
        // {id: 27, name: '庞琳琳',domain:'其他'},
        // {id: 28, name: '巨国贤',domain:'有色金属'},
        // {id: 29, name: '黄守宏',domain:'其他'},
        // {id: 30, name: '刘洋',domain:'计算机'},
        // {id: 31, name: '胡又文',domain:'计算机'},
        // {id: 32, name: '文浩',domain:'传播与文化'},
        // {id: 33, name: '朱国广',domain:'其他'},
        // {id: 34, name: '陈佳',domain:'其他'},
        // {id: 35, name: '吴立',domain:'农林牧渔'},
        // {id: 36, name: '冯福章',domain:'军工'}
 {id: 1, name: '任泽平',domain:'宏观'},
 {id: 2, name: '韦志超',domain:'宏观'},
 {id: 3, name: '姜超',domain:'宏观'},
 {id: 4, name: '顾潇啸',domain:'宏观'},
 {id: 5, name: '王涵',domain:'宏观'},
 {id: 6, name: '卢燕津',domain:'宏观'},
 {id: 7, name: '贾潇君',domain:'宏观'},
 {id: 8, name: '王连庆',domain:'宏观'},
 {id: 9, name: '王轶君',domain:'宏观'},
 {id: 10, name: '唐跃',domain:'宏观'},
 {id: 11, name: '乔永远',domain:'策略'},
 {id: 12, name: '戴康',domain:'策略'},
 {id: 13, name: '王德伦',domain:'策略'},
 {id: 14, name: '杨腾',domain:'策略'},
 {id: 15, name: '荀玉根',domain:'策略'},
 {id: 16, name: '张华恩',domain:'策略'},
 {id: 17, name: '李珂',domain:'策略'},
 {id: 18, name: '汤慧',domain:'策略'},
 {id: 19, name: '刘瑞',domain:'策略'},
 {id: 20, name: '王胜',domain:'策略'},
 {id: 31, name: '谢伟玉',domain:'策略'},
 {id: 32, name: '林丽梅',domain:'策略'},
 {id: 33, name: '金倩婧',domain:'策略'},
 {id: 34, name: '王佳音',domain:'策略'},
 {id: 35, name: '张潇潇',domain:'策略'},
 {id: 36, name: '刘富兵',domain:'金融工程'},
 {id: 37, name: '赵延鸿',domain:'金融工程'},
 {id: 38, name: '耿帅军',domain:'金融工程'},
 {id: 39, name: '刘正捷',domain:'金融工程'},
 {id: 40, name: '李雪君',domain:'金融工程'}, 
 {id: 41, name: '杨国平',domain:'金融工程'},
 {id: 42, name: '朱岚',domain:'金融工程'},
 {id: 43, name: '陈杰',domain:'金融工程'},
 {id: 44, name: '蒋俊阳',domain:'金融工程'},
 {id: 45, name: '刘均伟',domain:'金融工程'},
 {id: 46, name: '丁一',domain:'金融工程'},
 {id: 47, name: '邓虎',domain:'金融工程'},
 {id: 48, name: '夏祥全',domain:'金融工程'},
 {id: 49, name: '邵立夫',domain:'金融工程'},
 {id: 50, name: '马骏',domain:'金融工程'}, 
 {id: 61, name: '宋施怡',domain:'金融工程'},
 {id: 62, name: '徐溪',domain:'金融工程'},
 {id: 63, name: '罗军',domain:'金融工程'},
 {id: 64, name: '安宁宁',domain:'金融工程'},
 {id: 65, name: '严佳炜',domain:'金融工程'},
 {id: 66, name: '史庆盛',domain:'金融工程'},
 {id: 67, name: '马普凡',domain:'金融工程'},
 {id: 68, name: '张超',domain:'金融工程'},
 {id: 69, name: '魏涛',domain:'非银金融'},
 {id: 70, name: '郭晓露',domain:'非银金融'},
 {id: 71, name: '孙婷',domain:'非银金融'},
 {id: 72, name: '丁文韬',domain:'非银金融'},
 {id: 73, name: '吴绪越',domain:'非银金融'},
 {id: 74, name: '王维逸',domain:'非银金融'},
 {id: 75, name: '张龙',domain:'非银金融'}, 
 {id: 76, name: '邱冠华',domain:'银行'},
 {id: 77, name: '励雅敏',domain:'银行'},
 {id: 78, name: '黄耀锋',domain:'银行'},
 {id: 79, name: '马鲲鹏',domain:'银行'},
 {id: 80, name: '侯丽科',domain:'房地产'}, 
 {id: 81, name: '李品科',domain:'房地产'},
 {id: 82, name: '梁荣',domain:'房地产'},
 {id: 83, name: '苏雪晶',domain:'房地产'},
 {id: 84, name: '陈慎',domain:'房地产'},
 {id: 85, name: '刘璐',domain:'房地产'}, 
 {id: 86, name: '乐加栋',domain:'房地产'},
 {id: 87, name: '郭镇',domain:'房地产'},
 {id: 88, name: '金山',domain:'房地产'},
 {id: 89, name: '赵晓光',domain:'电子'},
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
 {id: 109, name: '武超则',domain:'通讯'},
 {id: 110, name: '于海宁',domain:'通讯'}, 
 {id: 111, name: '徐荃子',domain:'通讯'},
 {id: 112, name: '崔晨',domain:'通讯'},     
 {id: 113, name: '王大鹏',domain:'通讯'},
 {id: 114, name: '程成',domain:'通讯'},     
 {id: 115, name: '李亚军',domain:'通讯'},
 {id: 116, name: '马军',domain:'通讯'},
 {id: 117, name: '束海峰',domain:'通讯'},
 {id: 118, name: '樊鹏',domain:'通讯'}, 
 {id: 119, name: '杨仁文',domain:'传播与文化'},
 {id: 120, name: '文浩',domain:'传播与文化'}, 
 {id: 121, name: '许彬',domain:'传播与文化'},
 {id: 122, name: '杨文硕',domain:'传播与文化'},     
 {id: 123, name: '顾佳',domain:'传播与文化'},
 {id: 124, name: '王京乐',domain:'传播与文化'},     
 {id: 125, name: '张洁',domain:'传播与文化'},
 {id: 126, name: '方光照',domain:'传播与文化'},
 {id: 127, name: '邹润芳',domain:'机械'},
 {id: 128, name: '王书伟',domain:'机械'}, 
 {id: 129, name: '吕娟',domain:'机械'},
 {id: 130, name: '王浩',domain:'机械'},     
 {id: 131, name: '黄琨',domain:'机械'},
 {id: 132, name: '王华君',domain:'机械'},
 {id: 133, name: '陈显帆',domain:'机械'},
 {id: 134, name: '邓学',domain:'汽车和零部件'}, 
 {id: 135, name: '廖瀚博',domain:'汽车和零部件'},
 {id: 136, name: '王炎学',domain:'汽车和零部件'},    
 {id: 137, name: '崔书田',domain:'汽车和零部件'},
 {id: 138, name: '汪刘胜',domain:'汽车和零部件'},
 {id: 139, name: '唐楠',domain:'汽车和零部件'},
 {id: 140, name: '彭琪',domain:'汽车和零部件'}, 
 {id: 141, name: '徐春',domain:'家电'}, 
 {id: 142, name: '范杨',domain:'家电'},
 {id: 143, name: '曾婵',domain:'家电'},     
 {id: 144, name: '纪敏',domain:'家电'},
 {id: 145, name: '周旭辉',domain:'电力设备与新能源'},
 {id: 146, name: '牛品',domain:'电力设备与新能源'}, 
 {id: 147, name: '房青',domain:'电力设备与新能源'},
 {id: 148, name: '杨帅',domain:'电力设备与新能源'}, 
 {id: 149, name: '徐柏乔',domain:'电力设备与新能源'},
 {id: 150, name: '曾朵红',domain:'电力设备与新能源'},  
 {id: 151, name: '沈成',domain:'电力设备与新能源'},
 {id: 152, name: '邬博华',domain:'电力设备与新能源'},  
 {id: 153, name: '马军',domain:'电力设备与新能源'},
 {id: 154, name: '张垚',domain:'电力设备与新能源'},
 {id: 155, name: '钟奇',domain:'有色金属'},
 {id: 156, name: '施毅',domain:'有色金属'}, 
 {id: 157, name: '刘博',domain:'有色金属'},
 {id: 158, name: '田源',domain:'有色金属'}, 
 {id: 159, name: '巨国贤',domain:'有色金属'},
 {id: 160, name: '宋小庆',domain:'有色金属'},  
 {id: 161, name: '陈子坤',domain:'有色金属'},
 {id: 162, name: '赵鑫',domain:'有色金属'},   
 {id: 163, name: '杨诚笑',domain:'有色金属'},
 {id: 164, name: '孙亮',domain:'有色金属'},       
 {id: 165, name: '冯福章',domain:'军工'},    
 {id: 166, name: '郭洁',domain:'军工'},
 {id: 167, name: '原丁',domain:'军工'},     
 {id: 168, name: '张润毅',domain:'军工'},
 {id: 169, name: '梁铮',domain:'军工'}, 
 {id: 170, name: '余文心',domain:'医药生物'},
 {id: 171, name: '周锐',domain:'医药生物'}, 
 {id: 172, name: '王威',domain:'医药生物'},
 {id: 173, name: '郑琴',domain:'医药生物'}, 
 {id: 174, name: '刘宇',domain:'医药生物'},
 {id: 175, name: '丁丹',domain:'医药生物'},   
 {id: 176, name: '胡博新',domain:'医药生物'},
 {id: 177, name: '屠炜颖',domain:'医药生物'},  
 {id: 178, name: '徐佳熹',domain:'医药生物'},
 {id: 179, name: '项军',domain:'医药生物'},   
 {id: 180, name: '李鸣',domain:'医药生物'},
 {id: 181, name: '孙媛媛',domain:'医药生物'},   
 {id: 182, name: '郭鹏',domain:'环保'}, 
 {id: 183, name: '陈子坤',domain:'环保'},
 {id: 184, name: '沈涛',domain:'环保'},     
 {id: 185, name: '安鹏',domain:'环保'},
 {id: 186, name: '郑思恩',domain:'环保'},    
 {id: 187, name: '邵琳琳',domain:'环保'},
 {id: 188, name: '汪洋',domain:'环保'}, 
 {id: 189, name: '李跃博',domain:'酒店餐饮旅游'},
 {id: 190, name: '许娟娟',domain:'酒店餐饮旅游'},    
 {id: 191, name: '陈均峰',domain:'酒店餐饮旅游'},
 {id: 192, name: '旷实',domain:'酒店餐饮旅游'},
 {id: 193, name: '吴立',domain:'农林牧渔'}, 
 {id: 194, name: '刘哲铭',domain:'农林牧渔'},
 {id: 195, name: '谢刚',domain:'农林牧渔'}, 
 {id: 196, name: '张俊宇',domain:'农林牧渔'},
 {id: 197, name: '陈奇',domain:'农林牧渔'},   
 {id: 198, name: '胡彦超',domain:'农林牧渔'},
 {id: 199, name: '陈娇',domain:'农林牧渔'},   
 {id: 200, name: '蒋卫华',domain:'农林牧渔'},
 {id: 211, name: '蒋小东',domain:'农林牧渔'},  
 {id: 202, name: '董广阳',domain:'食品饮料'},
 {id: 213, name: '杨勇胜',domain:'食品饮料'},  
 {id: 214, name: '朱卫华',domain:'食品饮料'},
 {id: 215, name: '刘鹏',domain:'食品饮料'},   
 {id: 216, name: '薛玉虎',domain:'食品饮料'},
 {id: 217, name: '刘洁铭',domain:'食品饮料'},  
 {id: 218, name: '李婕',domain:'纺织服装'}, 
 {id: 219, name: '唐爽爽',domain:'纺织服装'},
 {id: 220, name: '顾柔刚',domain:'纺织服装'},  
 {id: 221, name: '马莉',domain:'纺织服装'},
 {id: 222, name: '杨岚',domain:'纺织服装'},   
 {id: 223, name: '焦娟',domain:'纺织服装'},
 {id: 224, name: '唐苓',domain:'纺织服装'},   
 {id: 225, name: '周海晨',domain:'轻工造纸'},
 {id: 226, name: '屠亦婷',domain:'轻工造纸'}, 
 {id: 227, name: '丁智艳',domain:'轻工造纸'},
 {id: 228, name: '穆方舟',domain:'轻工造纸'},  
 {id: 229, name: '吴冉劼',domain:'轻工造纸'},
 {id: 230, name: '郑恺,',domain:'轻工造纸'},  
 {id: 231, name: '濮冬燕',domain:'轻工造纸'},
 {id: 232, name: '李宏鹏',domain:'轻工造纸'},
 {id: 233, name: '沈涛',domain:'煤炭开采'},
 {id: 234, name: '安鹏',domain:'煤炭开采'}, 
 {id: 235, name: '郑思恩',domain:'煤炭开采'},
 {id: 236, name: '李俊松',domain:'煤炭开采'},  
 {id: 237, name: '万炜',domain:'煤炭开采'},
 {id: 238, name: '王祎佳',domain:'煤炭开采'},  
 {id: 239, name: '史江辉',domain:'煤炭开采'},
 {id: 240, name: '吴杰',domain:'煤炭开采'},   
 {id: 241, name: '邓勇',domain:'石油化工'},   
 {id: 242, name: '王晓林',domain:'石油化工'},
 {id: 243, name: '裘孝锋',domain:'石油化工'},  
 {id: 244, name: '王强',domain:'石油化工'},
 {id: 245, name: '肖洁',domain:'石油化工'},   
 {id: 246, name: '王席鑫',domain:'基础化工'}, 
 {id: 247, name: '孙琦祥',domain:'基础化工'},
 {id: 248, name: '袁善宸',domain:'基础化工'}, 
 {id: 249, name: '郑方镳',domain:'基础化工'},
 {id: 250, name: '徐留明',domain:'基础化工'},  
 {id: 251, name: '孙佳丽',domain:'基础化工'},
 {id: 252, name: '唐婕',domain:'基础化工'},   
 {id: 253, name: '王剑雨',domain:'基础化工'},
 {id: 254, name: '郭敏',domain:'基础化工'},
 {id: 255, name: '吴锡雄',domain:'基础化工'},
 {id: 256, name: '鲍雁辛',domain:'非金属材料'}, 
 {id: 257, name: '黄涛',domain:'非金属材料'},
 {id: 258, name: '邓云程',domain:'非金属材料'},     
 {id: 259, name: '邹戈',domain:'非金属材料'},
 {id: 260, name: '谢璐',domain:'非金属材料'},  
 {id: 261, name: '黄诗涛',domain:'非金属材料'},
 {id: 262, name: '李华丰',domain:'非金属材料'}, 
 {id: 263, name: '刘元瑞',domain:'钢铁'},
 {id: 264, name: '王鹤涛',domain:'钢铁'}, 
 {id: 265, name: '笃慧',domain:'钢铁'},
 {id: 266, name: '郭皓',domain:'钢铁'},     
 {id: 267, name: '任志强',domain:'钢铁'},
 {id: 268, name: '邱祖学',domain:'钢铁'},    
 {id: 269, name: '兰杰',domain:'钢铁'},
 {id: 270, name: '刘晓宁',domain:'公共事业水电煤'},
 {id: 271, name: '叶旭晨',domain:'公共事业水电煤'}, 
 {id: 272, name: '谷风',domain:'公共事业水电煤'},
 {id: 273, name: '王威',domain:'公共事业水电煤'}, 
 {id: 274, name: '车玺',domain:'公共事业水电煤'},
 {id: 275, name: '肖扬',domain:'公共事业水电煤'},    
 {id: 276, name: '郭丽丽',domain:'公共事业水电煤'},
 {id: 277, name: '徐闯',domain:'公共事业水电煤'},    
 {id: 278, name: '杨涛',domain:'建筑和工程'},
 {id: 279, name: '夏天',domain:'建筑和工程'}, 
 {id: 280, name: '唐笑',domain:'建筑和工程'},
 {id: 281, name: '陆玲玲',domain:'建筑和工程'}, 
 {id: 282, name: '汪立亭',domain:'批发和零售贸易'},
 {id: 283, name: '李宏科',domain:'批发和零售贸易'}, 
 {id: 284, name: '訾猛',domain:'批发和零售贸易'},
 {id: 285, name: '林浩然',domain:'批发和零售贸易'}, 
 {id: 286, name: '刘章明',domain:'批发和零售贸易'},
 {id: 287, name: '龚里',domain:'交通运输仓储'},
 {id: 288, name: '王品辉',domain:'交通运输仓储'}, 
 {id: 289, name: '张晓云',domain:'交通运输仓储'},
 {id: 290, name: '王春环',domain:'交通运输仓储'}, 
 {id: 291, name: '纪云涛',domain:'交通运输仓储'},
 {id: 292, name: '郑武',domain:'交通运输仓储'},     
 {id: 293, name: '岳鑫',domain:'交通运输仓储'},
 {id: 294, name: '凌军',domain:'交通运输仓储'},     
 {id: 295, name: '虞楠',domain:'交通运输仓储'},
 {id: 296, name: '姜明',domain:'交通运输仓储'}        
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
        var reporturl = "http://52.90.207.223:3000/author/"+$scope.selected.analyst.name;
        // var reporturl = "http://127.0.0.1:3000/author/"+$scope.selected.analyst.name;
        $http.get(reporturl).success(function(data) {
            try{
                // console.log(data);
                var tdata = [];
                for (var i = 0; i <data.length; i++) {
                  var d = data[i];
                  if("000001" ==  $scope.code){
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