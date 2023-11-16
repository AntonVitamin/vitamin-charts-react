import {lightThemePalette, darkThemePalette} from '../data';

export const setChartBarDefaults = (chartInterface) => {
  // colours
  chartInterface.defaults.elements.bar.backgroundColor =
    darkThemePalette.bar.background;
};

export const setChartSharedDefaults = (chartInterface, isDarkMode) => {
  if (isDarkMode) {
    chartInterface.defaults.color = darkThemePalette.generic.labels;
    chartInterface.defaults.borderColor = darkThemePalette.generic.borders;
    // ...extend
  } else {
    // colours
    chartInterface.defaults.color = lightThemePalette.generic.labels;
    chartInterface.defaults.borderColor = lightThemePalette.generic.borders;
  }

  return chartInterface;
};
