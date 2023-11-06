import {BarChart, LineChart, PieChart} from '../components/Charts';
import {parseChartConfig} from '../utils/parseChartConfig';

const renderChart = (chartConfig) => {
  const {type, data, options} = parseChartConfig(chartConfig);

  const CHART_MAP = {
    bar: <BarChart data={data} options={options} />,
    line: <LineChart data={data} options={options} />,
    pie: <PieChart data={data} options={options} />,
  };

  return CHART_MAP[type];
};

const ChartController = ({chartConfig}) => {
  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        width: '80vw',
        height: '80vh',
      }}>
      {renderChart(chartConfig)}
    </div>
  );
};

export default ChartController;
