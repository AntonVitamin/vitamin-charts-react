export const parseChartConfig = (chartConfig) => {
  const {type, labels, datasets, options} = chartConfig;

  return {
    type: type,
    data: {
      labels: labels,
      datasets: datasets.map((item) => {
        return {
          // generic
          backgroundColor: item.backgroundColor,
          borderColor: item.borderColor,
          borderWidth: item.borderWidth,
          data: item.data,
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
      indexAxis: options?.horizontalDisplay ? 'y' : 'x',
      plugins: {
        title: {
          display: options?.title ? true : false,
          text: options?.title,
        },
        subtitle: {
          display: true,
          text: 'Chart Subtitle',
          padding: {
            bottom: 50,
          },
        },
        legend: {
          display: options?.legendPosition ? true : false,
          position: options?.legendPosition,
        },
        // tooltip: {
        //   // enabled: false,
        //   callbacks: {
        //     // adds info on the tooltip
        //     footer: options?.tooltipFooter,
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
          stacked: options?.stacked ? true : false,
        },
        y: {
          //   title: {
          //     display: true,
          //     text: 'Y Axis Title',
          //     align: 'start',
          //   },
          stacked: options?.stacked ? true : false,
        },
        // line
        y1: {
          type: options?.isMultiAxis ? 'linear' : undefined,
          display: options?.isMultiAxis ? true : false,
          position: options?.isMultiAxis ? 'right' : undefined,
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  };
};
