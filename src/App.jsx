import ChartController from './controllers/chartController';

const chartConfig = {
  type: 'line',
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    // {
    //   label: 'Data X',
    //   data: [14, 25, 12, 22, 30, 27, 17],
    //   backgroundColor: '#5bc4fc',
    // },
    {
      label: 'Data Y',
      data: [20, 25, 15, 25, 30, 30, 20],
      backgroundColor: '#4343fa',
      borderColor: '#4343fa',
      borderWidth: 3,
    },
  ],
  options: {
    title: 'Chart Title',
    displayLegend: true,
  },
};

const isDarkMode = false;

const App = () => {
  return (
    <div style={{backgroundColor: isDarkMode ? '#2C2D33' : '#FFF'}}>
      <ChartController chartConfig={chartConfig} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
