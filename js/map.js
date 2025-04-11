
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));

        // 定义要展示的地点和对应的时期
        var data = [
            { name: '洛阳', period: '西汉', value: 100 }, // 造纸术发源地
            { name: '西安', period: '西汉', value: 100 }, // 造纸术发源地
            { name: '天水', period: '西汉', value: 100 }, // 造纸术发源地
            { name: '广州', period: '东汉', value: 80 },  // 广东造纸工业
            { name: '南京', period: '东汉', value: 80 },  // 江苏造纸工业
            { name: '杭州', period: '宋元', value: 80 },  // 浙江造纸工业
            { name: '济南', period: '宋元', value: 80 },  // 山东造纸工业
            { name: '福州', period: '宋元', value: 80 },  // 福建造纸工业
            { name: '乌鲁木齐', period: '明清', value: 80 },  // 新疆造纸工业
            { name: '成都', period: '明清', value: 80 },  // 四川造纸工业
            { name: '太原', period: '明清', value: 80 },  // 山西造纸工业
            { name: '石家庄', period: '明清', value: 80 },  // 河北造纸工业
            { name: '北京', period: '明清', value: 80 }   // 北京造纸工业
        ];

        var geoCoordMap = {
            '洛阳': [112.44, 34.7],
            '西安': [108.95, 34.27],
            '天水': [105.73, 34.58],
            '广州': [113.23, 23.16],
            '南京': [118.78, 32.04],
            '杭州': [120.19, 30.26],
            '济南': [117, 36.65],
            '福州': [119.3, 26.08],
            '乌鲁木齐': [87.6, 43.8],
            '成都': [104.06, 30.67],
            '太原': [112.55, 37.87],
            '石家庄': [114.52, 38.03],
            '北京': [116.41, 39.91]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord,
                        period: data[i].period  // 添加时期字段
                    });
                }
            }
            return res;
        };

        var option = {
            title: {
                text: '造纸术发源地与现代造纸工业基地',
                subtext: '重要的地点',
                left: 'center',
                top: '40',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + '（' + params.data.period + '时期）';
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(2,37,101,.5)',
                        borderColor: 'rgba(27, 252, 237, 0.5)'
                    },
                    emphasis: {
                        areaColor: 'rgba(2,37,101,.8)'
                    }
                }
            },
            series: [
                {
                    name: '造纸术地点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 10, // 设置一个固定的大小值
                    label: {
                        normal: {
                            formatter: '{b}', // 只显示地点名称
                            position: 'right',
                            show: true  // 直接显示标签
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#64ff10'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
});