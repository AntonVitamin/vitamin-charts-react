import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Abel, sans-serif;
  font-size: 16px;
  padding: 16px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  span {
    color: ${({$isDarkMode}) => ($isDarkMode ? '#FFF' : '#53565b')};
    font-size: 16px;
    font-weight: 200;
  }

  & span:first-child {
    margin-right: 15px;
  }
`;

export const ProgressBarContainer = styled.div`
  height: 5px;
  position: relative;
`;

export const ProgressDiv = styled.div`
  background-color: ${({$color}) => $color};
  border-radius: 50px 0 0 50px;
  height: 5px;
  position: absolute;
  width: ${({$percentage}) => `${$percentage}%`};
  z-index: 10;
`;

export const BackgroundDiv = styled.div`
  background-color: ${({$isDarkMode}) =>
    $isDarkMode ? '#222946' : 'lightGrey'};
  border-radius: 50px;
  height: 5px;
  position: absolute;
  width: 100%;
  z-index: 5;
`;
