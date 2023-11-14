import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Abel, sans-serif;
  font-size: 16px;
  width: 500px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ProgressBarContainer = styled.div`
  height: 10px;
  position: relative;
`;

export const ProgressDiv = styled.div`
  background-color: blue;
  border-radius: 50px 0 0 50px;
  height: 10px;
  position: absolute;
  width: 50%;
  z-index: 10;
`;

export const BackgroundDiv = styled.div`
  background-color: lightgrey;
  border-radius: 50px;
  height: 10px;
  position: absolute;
  width: 100%;
  z-index: 5;
`;
