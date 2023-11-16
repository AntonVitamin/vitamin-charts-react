import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #1a2036;
  border-radius: 10px;
  color: #fff;
  font-family: Abel, sans-serif;
  font-weight: 200;
`;

export const Title = styled.span`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: block;
  font-size: 16px;
  font-weight: 200;
  padding: 20px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.4;
  padding: 30px 20px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  max-width: 240px;
`;

export const DroneImage = styled.div`
  border: 1px solid red;
  height: 60px;
  width: 100px;
`;

export const DroneInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;

  & div:first-child {
    margin-right: 15px;
  }
`;

export const DroneInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export const DroneInfoItemData = styled.span`
  color: #48b6b8;
  font-size: 18px;
`;

export const FlightInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FlightInfoItem = styled.div`
  align-items: center;
  display: flex;
  padding-bottom: 10px;

  & span:nth-child(2) {
    margin-right: 5px;
    white-space: nowrap;
  }
`;

export const FlightInfoItemIcon = styled.div`
  margin-right: 15px;
  min-height: 15px;
  min-width: 15px;
  border: 1px solid blue;
`;

export const FlightInfoItemData = styled.span`
  color: #48b6b8;
  font-size: 16px;
`;

export const ChartContainer = styled.div`
  width: 60%;
`;
