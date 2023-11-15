import {DoughnutChart} from '../../charts';
import ProgressBar from '../ProgressBar';
import {
  parseDoughnutChartConfig,
  parseProgressBarData,
} from '../../../utils/parsing';
import {
  BodyContainer,
  ChartContainer,
  ChartTitle,
  HeaderContainer,
  MainContainer,
} from './styles';

const KeyPerformanceMetrics = ({data, isDarkMode}) => {
  const parsedDoughnutData = parseDoughnutChartConfig(data);
  const parsedProgressBarsData = parseProgressBarData(data);

  return (
    <MainContainer>
      <h2>Key Performance Metrics</h2>
      <HeaderContainer>
        <ChartTitle>Total Time 9 mins 54 secs</ChartTitle>
        <ChartContainer style={{width: '200px'}}>
          <DoughnutChart
            chartConfig={parsedDoughnutData}
            isDarkMode={isDarkMode}
          />
        </ChartContainer>
      </HeaderContainer>
      <BodyContainer>
        {parsedProgressBarsData.map((item) => {
          return (
            <ProgressBar
              data={item}
              isDarkMode={isDarkMode}
              key={`${item.color}-${item.title}`}
            />
          );
        })}
      </BodyContainer>
    </MainContainer>
  );
};

export default KeyPerformanceMetrics;
