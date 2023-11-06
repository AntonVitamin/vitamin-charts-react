import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {setChartDefaults} from '../../utils/setChartDefaults';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
setChartDefaults(Chart);

const BarChart = ({data, options}) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
