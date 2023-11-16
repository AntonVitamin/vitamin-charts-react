import {parseLineChartConfig} from '../../../utils/parsing';
import {LineChart} from '../../charts';
import {
  Body,
  ChartContainer,
  DataContainer,
  DroneInfoContainer,
  DroneInfoItem,
  DroneInfoItemData,
  DroneImage,
  FlightInfoContainer,
  FlightInfoItem,
  FlightInfoItemIcon,
  FlightInfoItemData,
  MainContainer,
  Title,
} from './styles';

const BatteryPerformance = ({data, isDarkMode}) => {
  const parsedChartConfig = parseLineChartConfig(data.chart);

  return (
    <MainContainer>
      <Title>Battery Performance</Title>
      <Body>
        <DataContainer>
          <DroneImage>Image</DroneImage>
          <DroneInfoContainer>
            <DroneInfoItem>
              <span>Drone Model:</span>
              <DroneInfoItemData>{data.drone.model}</DroneInfoItemData>
            </DroneInfoItem>
            <DroneInfoItem>
              <span>Station:</span>
              <DroneInfoItemData>{data.drone.station}</DroneInfoItemData>
            </DroneInfoItem>
          </DroneInfoContainer>
          <FlightInfoContainer>
            <FlightInfoItem>
              <FlightInfoItemIcon></FlightInfoItemIcon>
              <span>Flight Air Time:</span>
              <FlightInfoItemData>{data.flight.time}</FlightInfoItemData>
            </FlightInfoItem>
            <FlightInfoItem>
              <FlightInfoItemIcon></FlightInfoItemIcon>
              <span>Takeoff Battery:</span>
              <FlightInfoItemData>
                {`${data.flight.battery.start}%`}
              </FlightInfoItemData>
            </FlightInfoItem>
            <FlightInfoItem>
              <FlightInfoItemIcon></FlightInfoItemIcon>
              <span>Landing Battery:</span>
              <FlightInfoItemData>{`${data.flight.battery.end}%`}</FlightInfoItemData>
            </FlightInfoItem>
            <FlightInfoItem>
              <FlightInfoItemIcon></FlightInfoItemIcon>
              <span>Battery Usage:</span>
              <FlightInfoItemData>
                {`${data.flight.battery.start - data.flight.battery.end}%`}
              </FlightInfoItemData>
            </FlightInfoItem>
          </FlightInfoContainer>
        </DataContainer>
        <ChartContainer>
          <LineChart chartConfig={parsedChartConfig} isDarkMode={isDarkMode} />
        </ChartContainer>
      </Body>
    </MainContainer>
  );
};

export default BatteryPerformance;
