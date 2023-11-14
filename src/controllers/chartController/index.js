import {useEffect, useRef} from 'react';
import {
  BarChart,
  LineChart,
  PieChart,
  DoughnutChart,
} from '../../components/charts';
import {parseChartConfig} from '../../utils/charts/data-parsing';
import {ChartContainer, TitlesContainer, Title} from './styles';

const renderChart = (chartConfig, isDarkMode) => {
  const parsedChartConfig = parseChartConfig(chartConfig);

  const CHART_MAP = {
    bar: <BarChart chartConfig={parsedChartConfig} isDarkMode={isDarkMode} />,
    line: <LineChart chartConfig={parsedChartConfig} isDarkMode={isDarkMode} />,
    pie: <PieChart chartConfig={parsedChartConfig} isDarkMode={isDarkMode} />,
    doughnut: (
      <DoughnutChart chartConfig={parsedChartConfig} isDarkMode={isDarkMode} />
    ),
  };

  return CHART_MAP[parsedChartConfig.type];
};

const ChartController = ({chartConfig, isDarkMode}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef?.current;
    const titleElement = titleRef?.current;

    if (!containerElement || !titleElement) return;

    let resizeObserver = new ResizeObserver(() => {
      titleElement.style.fontSize = `${containerElement.clientWidth / 20}px`;
    });

    resizeObserver.observe(containerElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <ChartContainer ref={containerRef}>
      {chartConfig.options?.titles.main && (
        <TitlesContainer ref={titleRef}>
          <Title $isDarkMode={isDarkMode}>
            {chartConfig.options.titles.main}
          </Title>
        </TitlesContainer>
      )}
      {renderChart(chartConfig, isDarkMode)}
      {chartConfig.options?.displayLegend && <div id="legend-container"></div>}
    </ChartContainer>
  );
};

export default ChartController;
