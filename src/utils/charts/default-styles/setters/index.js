import {lightThemePalette, darkThemePalette, defaultFonts} from '../data';

export const setChartBarDefaults = (chartInterface) => {
  // colours
  chartInterface.defaults.elements.bar.borderColor =
    darkThemePalette.bar.border;
  chartInterface.defaults.elements.bar.backgroundColor =
    darkThemePalette.bar.background;

  // alignment
  chartInterface.defaults.elements.bar.borderWidth = 2;
};

export const setChartSharedDefaults = (chartInterface, isDarkMode) => {
  if (isDarkMode) {
    chartInterface.defaults.color = darkThemePalette.generic.labels;
    chartInterface.defaults.borderColor = darkThemePalette.generic.borders;
    chartInterface.defaults.plugins.title.color =
      darkThemePalette.generic.titles.main;
    chartInterface.defaults.plugins.subtitle.color =
      darkThemePalette.generic.titles.secondary;
    // ...extend
  } else {
    // colours
    chartInterface.defaults.color = lightThemePalette.generic.labels;
    chartInterface.defaults.borderColor = lightThemePalette.generic.borders;
    chartInterface.defaults.plugins.title.color =
      lightThemePalette.generic.titles.main;
    chartInterface.defaults.plugins.subtitle.color =
      lightThemePalette.generic.titles.secondary;
  }

  // alignment
  chartInterface.defaults.plugins.title.align = 'start';
  chartInterface.defaults.plugins.subtitle.align = 'start';

  // fonts
  chartInterface.defaults.plugins.title.font = {
    size: defaultFonts.title.size,
  };
  chartInterface.defaults.plugins.subtitle.font = {
    style: defaultFonts.subtitle.style,
  };

  // legend
  chartInterface.defaults.plugins.legend.labels.usePointStyle = true;

  return chartInterface;
};
