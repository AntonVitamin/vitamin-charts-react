// import ChartController from './controllers/chartController';
import BatteryPerformance from './components/metrics/BatteryPerformance';
// import KeyPerformanceMetrics from './components/metrics/KeyPerformanceMetrics';
// import ProgressBar from './components/metrics/ProgressBar';
// import {progressBarData} from './utils/data';
import {batteryPerformanceData} from './utils/data';

const isDarkMode = true;

const App = () => {
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#030c29' : '#FFF',
        padding: '100px',
      }}>
      {/* <ChartController chartConfig={chartConfig} isDarkMode={isDarkMode} /> */}
      {/* {progressBarData.map((item) => {
        return (
          <ProgressBar
            data={item}
            isDarkMode={isDarkMode}
            key={`${item.color}-${item.title}`}
          />
        );
      })} */}
      {/* <KeyPerformanceMetrics
        data={performanceMetricsData}
        isDarkMode={isDarkMode}
      /> */}
      <BatteryPerformance
        data={batteryPerformanceData}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default App;
