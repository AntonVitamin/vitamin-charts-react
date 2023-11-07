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
} from '../../utils/charts/default-styles/setters/setChartDefaults';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

const BarChart = ({data, options, isDarkMode}) => {
  setChartSharedDefaults(Chart, isDarkMode);
  setChartBarDefaults(Chart);

  return <Bar data={data} options={options} />;
};

export default BarChart;
