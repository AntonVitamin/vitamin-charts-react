export const parseChartConfig = (chartConfig) => {
  return {
    type: chartConfig.type,
    data: {
      labels: chartConfig.labels,
      datasets: chartConfig.datasets.map((item) => {
        return {
          // generic
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
          borderWidth: item.borderWidth,
          data: item.values,
          label: item.label,
          order: item.order,
          type: item.type,
          stack: item.stack,
          //line
          showLine: item.showLine,
          borderDash: item.borderDash,
          fill: item.fill,
          pointHoverRadius: item.pointHoverRadius,
          pointStyle: item.pointStyle,
          pointRadius: item.pointRadius,
          stepped: item.stepped,
          tension: item.tension,
          yAxisID: item.yAxisID,
        };
      }),
    },
    options: {
      indexAxis: chartConfig.options?.horizontalDisplay ? 'y' : 'x',
      plugins: {
        title: {
          display: chartConfig.options?.title ? true : false,
          text: chartConfig.options?.title,
        },
        // subtitle: {
        //   display: true,
        //   text: 'Chart Subtitle',
        //   color: 'blue',
        //   font: {
        //     size: 12,
        //   },
        // },
        legend: {
          display: chartConfig.options?.legendPosition ? true : false,
          position: chartConfig.options?.legendPosition,
        },
        // tooltip: {
        //   // enabled: false,
        //   callbacks: {
        //     // adds info on the tooltip
        //     footer: chartConfig.options?.tooltipFooter,
        //   },
        // },
      },
      // interaction: {
      //   intersect: false,
      //   mode: 'index',
      // },
      scales: {
        x: {
          //   title: {
          //     display: true,
          //     text: 'X Axis Title',
          //     align: 'end',
          //   },
          stacked: chartConfig.options?.stacked ? true : false,
        },
        y: {
          //   title: {
          //     display: true,
          //     text: 'Y Axis Title',
          //     align: 'start',
          //   },
          stacked: chartConfig.options?.stacked ? true : false,
        },
        // line
        y1: {
          type: chartConfig.options?.isMultiAxis ? 'linear' : undefined,
          display: chartConfig.options?.isMultiAxis ? true : false,
          position: chartConfig.options?.isMultiAxis ? 'right' : undefined,
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  };
};
