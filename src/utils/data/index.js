export const chartConfig = {
  type: 'doughnut',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    //bar
    // {
    //   label: 'Data X',
    //   data: [14, 25, 12, 22, 30, 27, 17],
    //   backgroundColor: '#5bc4fc',
    // },
    //line
    // {
    //   label: 'Data Y',
    //   data: [20, 25, 15, 25, 30, 30, 20],
    //   backgroundColor: '#4343fa',
    //   borderColor: '#4343fa',
    //   borderWidth: 3,
    // },
    // doughnut
    {
      label: 'Data Y',
      data: [70, 30],
      backgroundColor: ['#b280ff', '#E6E6E6'],
      borderWidth: 3,
    },
  ],
  options: {
    titles: {
      main: 'Chart Title',
    },
    displayLegend: true,
  },
};

export const progressBarData = [
  {
    title: 'Time to Complete the Request Form',
    values: {
      specific: 116,
      total: 594,
    },
    color: '#D5B8FF',
  },
  {
    title: 'Dispatch Time',
    values: {
      specific: 84,
      total: 594,
    },
    color: '#DAE085',
  },
  {
    title: 'Flight Time',
    values: {
      specific: 390,
      total: 594,
    },
    color: '#80B4FF',
  },
  {
    title: 'Task Duration',
    values: {
      specific: 550,
      total: 594,
    },
    color: '#80CBC3',
  },
];

export const performanceMetricsData = {
  labels: [
    'Time to Complete the Request Form',
    'Dispatch Time',
    'Response Time',
    'Transit Time',
    'Flight Time',
    'Task Duration',
  ],
  datasets: [
    {
      data: [44, 116, 274, 245, 478, 711],
      backgroundColor: [
        '#DAE085',
        '#D5B8FF',
        '#BB86FC',
        '#9875FF',
        '#80B4FF',
        '#80CBC3',
      ],
    },
  ],
};
