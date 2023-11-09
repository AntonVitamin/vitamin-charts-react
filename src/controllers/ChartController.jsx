import {useEffect, useRef} from 'react';
import {BarChart, LineChart, PieChart} from '../components/Charts';
import {parseChartConfig} from '../utils/charts/data-parsing';

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
    const parentElement = containerRef?.current;
    const childElement = titleRef?.current;

    if (!parentElement) return;
    if (!childElement) return;

    let resizeObserver = new ResizeObserver(() => {
      childElement.style.fontSize = `${parentElement.clientWidth / 20}px`;
    });

    resizeObserver.observe(parentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      id="chart-container"
      ref={containerRef}
      style={{
        position: 'relative',
        margin: 'auto',
        width: '80vw',
        height: '80vh',
      }}>
      <h3 id="chart-title" ref={titleRef}>
        {chartConfig.options?.title}
      </h3>
      {renderChart(chartConfig, isDarkMode)}
    </div>
  );
};

export default ChartController;
