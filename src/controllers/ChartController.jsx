import { BarChart, LineChart, PieChart } from '../components/Charts';
import { parseChartConfig } from '../utils/chartsConfig';

const renderChart = (chartConfig) => {
  const { type, data, options } = parseChartConfig(chartConfig);

  const CHART_MAP = {
    bar: <BarChart data={data} options={options} />,
    line: <LineChart data={data} options={options} />,
    pie: <PieChart data={data} options={options} />,
  };

  return CHART_MAP[type];
};

const ChartController = ({ chartConfig }) => {
  return <>{renderChart(chartConfig)}</>;
};

export default ChartController;
