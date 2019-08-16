import React from 'react';
import ModalDimmer from "./ModalDimmer";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const highchartsConfig = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Browser market shares in January, 2018'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
        }
    }
},
series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }]
}]
}

export default () => {
  return (
    <>
      <h2>Pie chart example</h2>
      <ModalDimmer />
      <HighchartsReact
        highcharts={Highcharts}
        options={highchartsConfig}
      />
    </>
  );

}