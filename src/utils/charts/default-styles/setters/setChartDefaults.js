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

const lightColourPalette = {
  generic: {
    labels: '#000',
    borders: '#D3D3D3',
    titles: {
      main: '#828282',
      secondary: '#A8A8A8',
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
