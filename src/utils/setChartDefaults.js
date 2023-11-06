const darkColourPalette = {
  generic: {
    labels: '#FFF',
    borders: '#4F4F4F',
    titles: {
      main: '#828282',
      secondary: '#FFF',
    },
  },
  bar: {
    border: '#165BAA',
    background: '#63ABFD',
  },
};

export const setChartBarDefaults = (chartInterface) => {
  // colours
  chartInterface.defaults.elements.bar.borderColor =
    darkColourPalette.bar.border;
  chartInterface.defaults.elements.bar.backgroundColor =
    darkColourPalette.bar.background;

  // alignment
  chartInterface.defaults.elements.bar.borderWidth = 2;
};

export const setChartSharedDefaults = (chartInterface, isLightMode) => {
  if (isLightMode) {
    // ...extend
  } else {
    // colours
    chartInterface.defaults.color = darkColourPalette.generic.labels;
    chartInterface.defaults.borderColor = darkColourPalette.generic.borders;
    chartInterface.defaults.plugins.title.color =
      darkColourPalette.generic.titles.main;
    chartInterface.defaults.plugins.subtitle.color =
      darkColourPalette.generic.titles.secondary;

    // alignment
    chartInterface.defaults.plugins.title.align = 'start';
    chartInterface.defaults.plugins.subtitle.align = 'start';

    // fonts
    chartInterface.defaults.plugins.title.font = {size: 24};
    chartInterface.defaults.plugins.subtitle.font = {style: 'italic'};
  }

  return chartInterface;
};
