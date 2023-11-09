import {useEffect, useRef} from 'react';
import {BarChart, LineChart, PieChart} from '../../components/Charts';
import {parseChartConfig} from '../../utils/charts/data-parsing';
import {ChartTitle, ChartSubtitle, ChartTitlesContainer} from './styles';

const renderChart = (chartConfig, isDarkMode) => {
  const {type, data, options} = parseChartConfig(chartConfig);

  const CHART_MAP = {
    bar: <BarChart data={data} options={options} isDarkMode={isDarkMode} />,
    line: <LineChart data={data} options={options} isDarkMode={isDarkMode} />,
    pie: <PieChart data={data} options={options} isDarkMode={isDarkMode} />,
  };

  return CHART_MAP[type];
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
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        margin: 'auto',
        width: '80vw',
        height: '80vh',
      }}>
      {chartConfig.options?.title && (
        <ChartTitlesContainer ref={titleRef}>
          <ChartTitle>{chartConfig.options.title}</ChartTitle>
          {chartConfig.options?.subtitle && (
            <ChartSubtitle>{chartConfig.options.subtitle}</ChartSubtitle>
          )}
        </ChartTitlesContainer>
      )}
      {renderChart(chartConfig, isDarkMode)}
    </div>
  );
};

export default ChartController;
