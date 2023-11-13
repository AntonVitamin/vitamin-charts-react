import {useEffect} from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {setChartSharedDefaults} from '../../utils/charts/default-styles/setters';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({chartConfig, isDarkMode}) => {
  const {data, options, plugins} = chartConfig;
  setChartSharedDefaults(Chart, isDarkMode);

  return <Line data={data} options={options} plugins={plugins} />;
};

export default LineChart;
