import {DoughnutChart} from '../../charts';
import ProgressBar from '../ProgressBar';
import {
  parseDoughnutChartConfig,
  parseProgressBarData,
} from '../../../utils/parsing';
import {
  Body,
  ChartContainer,
  ChartTitle,
  Header,
  MainContainer,
  ProgressBarsContainer,
  Title,
} from './styles';

const KeyPerformanceMetrics = ({data, isDarkMode}) => {
  const parsedDoughnutData = parseDoughnutChartConfig(data);
  const parsedProgressBarsData = parseProgressBarData(data);

  return (
    <MainContainer>
      <Title>Key Performance Metrics</Title>
      <Body>
        <Header>
          <ChartTitle>
            Total Time
            <br />9 mins 54 secs
          </ChartTitle>
          <ChartContainer>
            <DoughnutChart
              chartConfig={parsedDoughnutData}
              isDarkMode={isDarkMode}
            />
          </ChartContainer>
        </Header>
        <ProgressBarsContainer>
          {parsedProgressBarsData.map((item) => {
            return (
              <ProgressBar
                data={item}
                isDarkMode={isDarkMode}
                key={`${item.color}-${item.title}`}
              />
            );
          })}
        </ProgressBarsContainer>
      </Body>
    </MainContainer>
  );
};

export default KeyPerformanceMetrics;
