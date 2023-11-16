import {htmlLegendPlugin} from '../plugins';

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
          // borderRadius: 3,
          borderColor: item.borderColor,
          borderWidth: item.borderWidth,
          borderRadius: 3,
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
      maintainAspectRatio: true,
      indexAxis: options?.horizontalDisplay ? 'y' : 'x',
      plugins: {
        legend: {
          display: false,
        },
        htmlLegend: {
          containerID: 'legend-container',
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
          title: {
            display: options?.titles.xAxis ? true : false,
            text: options?.titles.xAxis,
            align: 'center',
            font: {
              size: 16,
            },
          },
          stacked: options?.stacked ? true : false,
          grid: {
            drawTicks: false,
          },
          ticks: {
            padding: 10,
          },
        },
        y: {
          title: {
            display: options?.titles.yAxis ? true : false,
            text: options?.titles.yAxis,
            align: 'center',
            font: {
              size: 16,
            },
          },
          stacked: options?.stacked ? true : false,
          grid: {
            drawTicks: false,
          },
          ticks: {
            padding: 10,
          },
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
    plugins: [options?.displayLegend ? htmlLegendPlugin : false],
  };
};

export const parseLineChartConfig = (chartConfig) => {
  const {labels, datasets, options} = chartConfig;

  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets.map((item) => {
        return {
          // generic
          backgroundColor: options?.gradient
            ? ({chart: {ctx}}) => {
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, options?.gradient[0]);
                gradient.addColorStop(1, options?.gradient[1]);
                return gradient;
              }
            : item.backgroundColor,
          borderColor: item.borderColor,
          borderWidth: item.borderWidth,
          data: item.data,
          label: item.label,
          //line
          fill: item.fill,
          pointStyle: item.pointStyle,
          stepped: item.stepped,
          tension: item.tension,
        };
      }),
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        x: {
          ticks: {
            padding: 10,
          },
        },
        y: {
          grid: {
            drawTicks: false,
          },
          min: options?.scale?.min,
          max: options?.scale?.max,
          ticks: {
            padding: 10,
            stepSize: options?.scale?.stepSize,
          },
        },
      },
    },
  };
};

export const parseDoughnutChartConfig = (chartConfig) => {
  const {type, labels, datasets} = chartConfig;

  return {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: datasets.map((item) => {
        return {
          backgroundColor: item.backgroundColor,
          data: item.data,
          borderWidth: 2,
          borderColor: '#1A2036',
        };
      }),
    },
    options: {
      cutout: '75%',
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        // tooltip: {
        //   callbacks: {
        //     // adds info on the tooltip
        //     footer: options?.tooltipFooter,
        //   },
        // },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  };
};

export const parseProgressBarData = (data) => {
  const totalTime = data.datasets[0].data.reduce((a, b) => a + b);
  return data.labels.map((item, index) => {
    return {
      title: item,
      values: {
        specific: data.datasets[0].data[index],
        total: totalTime,
      },
      color: data.datasets[0].backgroundColor[index],
    };
  });
};
