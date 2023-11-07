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
  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        width: '80vw',
        height: '80vh',
      }}>
      {renderChart(chartConfig, isDarkMode)}
    </div>
  );
};

export default ChartController;
