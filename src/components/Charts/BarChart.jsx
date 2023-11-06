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
} from '../../utils/setChartDefaults';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);
setChartSharedDefaults(Chart, false);
setChartBarDefaults(Chart);

const BarChart = ({data, options}) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
