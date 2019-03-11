import * as React from "react";
import * as echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/line";
// 引入提示框和标题组件
import "echarts/lib/component/legend";
import "echarts/lib/component/title";

import "./style.pcss";

export default class Chart extends React.Component<any, any> {
    componentDidMount() {
        const ec = echarts as any;
        const chartDom: HTMLElement = document.getElementById("chart");
        const myChart = ec.init(chartDom);

        // 绘制图表
        myChart.setOption({
            title: {
                text: 'Echarts入门示例'
            },
            legend: {
                data: ['人数']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                areaStyle: {}
            }]
        });
    }
    render() {
        return <div id="chart"></div>;
    }
}
