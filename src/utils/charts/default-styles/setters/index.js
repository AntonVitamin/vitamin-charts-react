import {lightColourPalette, darkColourPalette} from '../data';

export const setChartBarDefaults = (chartInterface) => {
  // colours
  chartInterface.defaults.elements.bar.borderColor =
    darkColourPalette.bar.border;
  chartInterface.defaults.elements.bar.backgroundColor =
    darkColourPalette.bar.background;

  // alignment
  chartInterface.defaults.elements.bar.borderWidth = 2;
};

export const setChartSharedDefaults = (chartInterface, isDarkMode) => {
  if (isDarkMode) {
    chartInterface.defaults.color = darkColourPalette.generic.labels;
    chartInterface.defaults.borderColor = darkColourPalette.generic.borders;
    chartInterface.defaults.plugins.title.color =
      darkColourPalette.generic.titles.main;
    chartInterface.defaults.plugins.subtitle.color =
      darkColourPalette.generic.titles.secondary;
    // ...extend
  } else {
    // colours
    chartInterface.defaults.color = lightColourPalette.generic.labels;
    chartInterface.defaults.borderColor = lightColourPalette.generic.borders;
    chartInterface.defaults.plugins.title.color =
      lightColourPalette.generic.titles.main;
    chartInterface.defaults.plugins.subtitle.color =
      lightColourPalette.generic.titles.secondary;
  }

  // alignment
  chartInterface.defaults.plugins.title.align = 'start';
  chartInterface.defaults.plugins.subtitle.align = 'start';

  // fonts
  chartInterface.defaults.plugins.title.font = {size: 24};
  chartInterface.defaults.plugins.subtitle.font = {style: 'italic'};

  return chartInterface;
};
