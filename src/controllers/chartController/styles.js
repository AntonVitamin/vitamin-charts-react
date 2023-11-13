import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  margin: auto;
  width: 80vw;
  height: 80vh;
`;

export const TitlesContainer = styled.div`
  margin: 20px 0;
`;

export const Title = styled.h3`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: Helvetica;
  font-weight: 400;
  color: ${({$isDarkMode}) => ($isDarkMode ? '#FFF' : '#53565b')};
  margin: 0 0 10px 0;
`;

export const Subtitle = styled.h5`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: Helvetica;
  font-weight: 400;
  color: #53565b;
  margin: 0;
`;
