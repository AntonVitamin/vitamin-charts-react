import {
  MainContainer,
  TitleContainer,
  ProgressBarContainer,
  ProgressDiv,
  BackgroundDiv,
} from './styles';

const calculatePercentage = (specific, total) => {
  return (specific / total) * 100;
};

const ProgressBar = ({data, isDarkMode}) => {
  const percentage = calculatePercentage(
    data.values.specific,
    data.values.total
  );

  return (
    <MainContainer>
      <TitleContainer $isDarkMode={isDarkMode}>
        <span>{data.title}</span>
        <span>X mins Y secs</span>
      </TitleContainer>
      <ProgressBarContainer>
        <ProgressDiv $percentage={percentage} $color={data.color}></ProgressDiv>
        <BackgroundDiv $isDarkMode={isDarkMode}></BackgroundDiv>
      </ProgressBarContainer>
    </MainContainer>
  );
};

export default ProgressBar;
