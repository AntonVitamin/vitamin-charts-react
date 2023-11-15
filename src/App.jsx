// import ChartController from './controllers/chartController';
import ProgressBar from './components/metrics/ProgressBar';
import {progressBarData} from './utils/charts/data';

const isDarkMode = true;

const App = () => {
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#1A2036' : '#FFF',
        padding: '100px',
      }}>
      {/* <ChartController chartConfig={chartConfig} isDarkMode={isDarkMode} /> */}
      {progressBarData.map((item) => {
        return (
          <ProgressBar
            data={item}
            isDarkMode={isDarkMode}
            key={`${item.color}-${item.title}`}
          />
        );
      })}
    </div>
  );
};

export default App;
