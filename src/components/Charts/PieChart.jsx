import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
import {setChartSharedDefaults} from '../../utils/defaults/setters';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({chartConfig, isDarkMode}) => {
  const {data, options, plugins} = chartConfig;
  setChartSharedDefaults(Chart, isDarkMode);

  return <Pie data={data} options={options} plugins={plugins} />;
};

export default PieChart;
