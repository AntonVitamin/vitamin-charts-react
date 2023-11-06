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
import {
  setChartLineDefaults,
  setChartSharedDefaults,
} from '../../utils/setChartDefaults';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({data, options}) => {
  return <Line options={options} data={data} />;
};

export default LineChart;
