$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
echarts_2()
echarts_3()
echarts_4()
echarts_5()
function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));
        // 模拟从CSV文件加载的数据
        var data = [
            {province: '山东省', production: 2414.96},
            {province: '广东省', production: 2374.14},
            {province: '浙江省', production: 1599.35},
            {province: '江苏省', production: 1442},
            {province: '福建省', production: 935.3},
            {province: '广西壮族自治区', production: 558.05},
            {province: '湖北省', production: 543.1},
            {province: '重庆市', production: 417.8},
            {province: '安徽省', production: 401.27},
            {province: '河南省', production: 398.03},
            {province: '江西省', production: 390.77},
            {province: '河北省', production: 377.89},
            {province: '湖南省', production: 368.52},
            {province: '四川省', production: 347.66},
            {province: '天津市', production: 248.52},
            {province: '海南省', production: 191.04},
            {province: '辽宁省', production: 171.74},
            {province: '山西省', production: 118.27},
            {province: '云南省', production: 88.57},
            {province: '贵州省', production: 78.28},
            {province: '陕西省', production: 68.12},
            {province: '黑龙江省', production: 34.07},
            {province: '吉林省', production: 28.92},
            {province: '上海市', production: 27.51},
            {province: '新疆维吾尔自治区', production: 25.29},
            {province: '宁夏回族自治区', production: 23.69},
            {province: '内蒙古自治区', production: 10.61},
            {province: '甘肃省', production: 4.67},
            {province: '北京市', production: 3.24},
            {province: '西藏自治区', production: 0},
            {province: '青海省', production: 0}
        ];
        var titlename = data.map(function(item) {
            return item.province;
        });
        var value = data.map(function(item) {
            return item.production;
        });
        var option = {
            title: {
                text: '2024年各省份造纸产量',
                left: 'center',
				textStyle: {
				            color: '#FFD700'  // 金色
				        }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
				textStyle: {  // 番茄红
				            color: '#ffffff',
							}
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: titlename,
                axisLabel: {
                    formatter: function (value) {
                        if (value.length > 5) {
                            return value.substring(0, 5) + '...';
                        }
                        return value;
                    },
					textStyle: {
					                color: '#32CD32'  // 酸橙绿
					            }
                }
            },
            yAxis: {
                type: 'value',
				axisLabel: {
				            textStyle: {
				                color: '#32CD32'  // 皇家蓝
				            }
				        }
            },
            series: [{
                data: value,
                type: 'bar',
                barWidth: '60%',
				itemStyle: {
				            normal: {
				                color: '#073d7f',  // 条形图颜色
				                barBorderRadius: 50,
				            }
				        },
				        label: {
				            normal: {
				                show: true,
				                position: 'right',
				                formatter: '{c}',
				                textStyle: {  // 橙色
				                    color: '#073d7f'
				                }
				            }
				        },
            }],
            dataZoom: [{
                type: 'slider',
                start: 0,
                end: 50
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_3() {
	            // 基于准备好的dom，初始化echarts实例
	            var myChart = echarts.init(document.getElementById('echart3'));
	
	            // 指定图表的配置项和数据
	            var option = {
	                backgroundColor: '#ffffff',
	                title: {
	                    text: '蔡伦造纸术流程图',
	                    left: 'center',
	                    textStyle: {
	                        color: '#8B4513' // 棕色标题
	                    }
	                },
	                tooltip: {
	                    trigger: 'item',
	                    formatter: '{b}'
	                },
	                series: [
	                    {
	                        name: '造纸流程',
	                        type: 'graph',
	                        layout: 'force',
	                        symbolSize: 50,
	                        roam: true,
	                        label: {
	                            show: true
	                        },
	                        edgeSymbol: ['circle', 'arrow'],
	                        edgeSymbolSize: [4, 10],
	                        edgeLabel: {
	                            fontSize: 12
	                        },
	                        data: [
	                            { name: '原料采集与处理', image: 'images/1.png' },
	                            { name: '蒸煮分离纤维', image: 'images/2.png' },
	                            { name: '舂捣成浆', image: 'images/3.png' },
	                            { name: '抄纸定型', image: 'images/4.png' },
	                            { name: '压榨脱水', image: 'images/5.png' },
	                            { name: '晾晒干燥', image: 'images/6.png' },
	                            { name: '后期整理', image: 'images/7.png' }
	                        ],
	                        links: [
	                            { source: '原料采集与处理', target: '蒸煮分离纤维' },
	                            { source: '蒸煮分离纤维', target: '舂捣成浆' },
	                            { source: '舂捣成浆', target: '抄纸定型' },
	                            { source: '抄纸定型', target: '压榨脱水' },
	                            { source: '压榨脱水', target: '晾晒干燥' },
	                            { source: '晾晒干燥', target: '后期整理' }
	                        ],
	                        force: {
	                            repulsion: 1000
	                        },
	                        animation: true
	                    }
	                ]
	            };
	
	            // 使用刚指定的配置项和数据显示图表。
	           myChart.setOption(option);
	           
	                       // 监听点击事件
	                       myChart.on('click', function (params) {
	                           if (params.data) {
	                               var imgSrc = params.data.image;
	                               document.getElementById('modalImage').src = imgSrc;
	                               document.getElementById('myModal').style.display = 'block';
	                           }
	                       });
	           
	                       // 获取模态框
	                       var modal = document.getElementById("myModal");
	           
	                       // 获取 <span> 元素，点击关闭按钮
	                       var span = document.getElementsByClassName("close")[0];
	           
	                       // 当用户点击 <span> (x), 关闭模态框
	                       span.onclick = function() {
	                           modal.style.display = "none";
	                       }
	           
	                       // 当用户点击模态框外部，关闭它
	                       window.onclick = function(event) {
	                           if (event.target == modal) {
	                               modal.style.display = "none";
	                           }
	                       }
	           
	                       window.addEventListener("resize",function(){
	                           myChart.resize();
	                       });
	                   }
	           
	                   // 初始化图表
	                   echarts_3();
	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
 var option = {
    grid: {
           left: '0',
   		top: '30',
           right: '0',
           bottom: '10',
           containLabel: true
       },
           legend: {
   
               top: 0,
   
               textStyle: {
   
               color: "#fff",
   
           },
   
           itemWidth: 10,  // 设置宽度
   
           itemHeight: 10, // 设置高度
   
           },
   
           tooltip: {
   
               trigger: 'axis',
   
               axisPointer: { // 坐标轴指示器，坐标轴触发有效
   
                   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
   
               }
   
           },
   
           xAxis: {
   
               type: 'category',
   
               data: ["2015年","2020年","2025年",],
   
               axisTick: { //---坐标轴 刻度
   
                   show: true, //---是否显示
   
               },
   
               axisLine: { //---坐标轴 轴线
   
                   show: true, //---是否显示
   
                   lineStyle: {
   
                       color: 'rgba(255,255,255,.1)',
   
                       width: 2,
   
                       type: 'dotted',
   
                   },
   
               },
   
               axisLabel: {//X轴文字
   
                   textStyle: {
   
                       fontSize: 12,
   
                       color: '#fff'
   
                   },
   
               },
   
           },
   
           yAxis: {
   
               type: 'value',
   
               splitLine: {//分割线
   
                   show: true,
   
                   lineStyle: {
    color: 'rgba(255,255,255,.1)',
   
                       width: 2,
                       type: 'dotted'
   
                   }
   
               },
   
               axisLabel: {//Y轴刻度值
   
                   formatter: '{value}',
   
                   textStyle: {
   
                       fontSize: 12,
   
                       color: '#fff'
   
                   },
   
               },
   
               axisLine: { //---坐标轴 轴线
   
                   show: false, //---是否显示
   
               },
   
           },
   
           series: [{
   
               name: '包装用纸 单位:万吨',
   
               type: 'bar',
   
               data: [7., 7.,7.5],
   
               barWidth: 15,
   	
               barGap: 2, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
   
               itemStyle: {
   
                   normal: {
   barBorderRadius: 50,
                       color: "#446ACF",
   
                   }
   
               },
   
           }, {
   
               name: '办公用纸 单位:十亿元',
   
               type: 'bar',
   
               data: [4, 5,7],
   
               barWidth: 15, //柱图宽度
   	
               itemStyle: {
   
                   normal: { //设置颜色的渐变
   barBorderRadius: 50,
                       color: "#4fb69d",
   
                   }
   
               },
   
           }] };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var option = {
        legend: {
            orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255,255,255,.5)'
            },
            top: '20%',
            right: 30,
            data: ['木浆', '非木纤维', '填料', '胶料', '施胶剂', '染料和颜料', '化学助剂']
        },
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        calculable : true,
        series : [
            {
                type:'pie',
                radius : [20, 70],
                center: ["35%", "50%"],
                roseType : 'area',
                data:[ 
                    {value: 40, name:'木浆'},
                    {value: 25, name:'非木纤维'},
                    {value: 15, name:'填料'},
                    {value: 10, name:'胶料'},
                    {value: 5, name:'施胶剂'},
                    {value: 3, name:'染料和颜料'},
                    {value: 2, name:'化学助剂'}
                ],
                 label: {
                 normal: {
                     formatter: function(param) {
                         return param.name +':\n' + param.value + '%';
                     }
                 }
             },
             labelLine: {
                 normal: {
                      length:5,
                      length2:15,
                     lineStyle: { width: 1}
                 }
             },
             itemStyle: {
                 normal: {
                     shadowBlur: 30,
                     shadowColor: 'rgba(0, 0, 0, 0.4)'
                 }
             },
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
})