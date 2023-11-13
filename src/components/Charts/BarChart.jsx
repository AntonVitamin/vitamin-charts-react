import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {
  setChartBarDefaults,
  setChartSharedDefaults,
} from '../../utils/charts/default-styles/setters';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

const BarChart = ({chartConfig, isDarkMode}) => {
  const {data, options, plugins} = chartConfig;
  setChartSharedDefaults(Chart, isDarkMode);
  setChartBarDefaults(Chart);

  return <Bar data={data} options={options} plugins={plugins} />;
};

export default BarChart;
