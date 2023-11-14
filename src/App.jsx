import ChartController from './controllers/chartController';
import ProgressBar from './components/metrics/ProgressBar';

const chartConfig = {
  type: 'doughnut',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    //bar
    // {
    //   label: 'Data X',
    //   data: [14, 25, 12, 22, 30, 27, 17],
    //   backgroundColor: '#5bc4fc',
    // },
    //line
    // {
    //   label: 'Data Y',
    //   data: [20, 25, 15, 25, 30, 30, 20],
    //   backgroundColor: '#4343fa',
    //   borderColor: '#4343fa',
    //   borderWidth: 3,
    // },
    // doughnut
    {
      label: 'Data Y',
      data: [70, 30],
      backgroundColor: ['#b280ff', '#E6E6E6'],
      borderWidth: 3,
    },
  ],
  options: {
    titles: {
      main: 'Chart Title',
    },
    displayLegend: true,
  },
};

const isDarkMode = false;

const App = () => {
  return (
    <div style={{backgroundColor: isDarkMode ? '#2C2D33' : '#FFF'}}>
      <ChartController chartConfig={chartConfig} isDarkMode={isDarkMode} />
      <ProgressBar percentage="50" color="blue" isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
