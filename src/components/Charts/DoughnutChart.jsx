import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {setChartSharedDefaults} from '../../utils/defaults/setters';

Chart.register(ArcElement, Tooltip, Legend);

const BarChart = ({chartConfig, isDarkMode}) => {
  const {data, options, plugins} = chartConfig;
  setChartSharedDefaults(Chart, isDarkMode);

  return <Doughnut data={data} options={options} plugins={plugins} />;
};

export default BarChart;
