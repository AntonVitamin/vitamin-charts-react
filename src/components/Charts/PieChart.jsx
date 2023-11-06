import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

// TODO: defaults...

const PieChart = ({data, options}) => {
  return <Pie options={options} data={data} />;
};

export default PieChart;
