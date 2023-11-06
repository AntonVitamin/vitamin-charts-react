export const setChartDefaults = (chart) => {
  chart.defaults.elements.bar.borderColor = 'red';
  chart.defaults.elements.bar.borderWidth = 4;
  // ... extend

  return chart;
};
