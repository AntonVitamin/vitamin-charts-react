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

export const batteryPerformanceData = {
  drone: {
    model: 'DJI MAVIC 2EA',
    station: 'HeroTech8',
  },
  flight: {
    time: '7 mins 58 secs',
    battery: {start: 90, end: 84},
  },
  chart: {
    labels: [
      '10:30',
      '10:31',
      '10:32',
      '10:33',
      '10:34',
      '10:35',
      '10:36',
      '10:37',
      '10:38',
    ],
    datasets: [
      {
        backgroundColor: '#48b6b8',
        borderColor: '#48b6b8',
        data: [90, 90, 90, 88, 88, 86, 86, 84, 84],
        fill: true,
        pointStyle: false,
        stepped: true,
      },
    ],
    options: {
      gradient: ['#48B6B820', '#FFFFFF20'],
      scale: {
        min: 0,
        max: 100,
        stepSize: 10,
      },
    },
  },
};
