
$(function () {
    echarts_map();
});

function echarts_map() {
    var myChart = echarts.init(document.getElementById('map_1'));
    var guangdong = "js/44.json";
    $.get(guangdong, function(tjJson) {
        echarts.registerMap('guangdong', tjJson);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'guangdong'
            }]
        });

        var geoCoordMap = {
            '洛阳': [112.44, 34.7],
            '西安': [108.95, 34.27],
            '天水': [105.73, 34.58],
            '广州': [113.23, 23.16],
            '南京': [118.78, 32.04],
            '杭州': [120.19, 30.26],
            '济南': [117, 36.65],
            '福州': [119.3, 26.08]
        };

        var data = [
            { name: '洛阳', value: 100 }, // 造纸术发源地
            { name: '西安', value: 100 }, // 造纸术发源地
            { name: '天水', value: 100 }, // 造纸术发源地
            { name: '广州', value: 80 },  // 广东造纸工业
            { name: '南京', value: 80 },  // 江苏造纸工业
            { name: '杭州', value: 80 },  // 浙江造纸工业
            { name: '济南', value: 80 },  // 山东造纸工业
            { name: '福州', value: 80 }   // 福建造纸工业
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
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
                trigger: 'item'
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
                    name: '地点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 6; // 调整大小
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
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
        window.addEventListener("resize", function(){
            myChart.resize();
        });
    });
}