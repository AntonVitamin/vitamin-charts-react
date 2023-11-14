import {
  MainContainer,
  TitleContainer,
  Title,
  Data,
  ProgressBarContainer,
  ProgressDiv,
  BackgroundDiv,
} from './styles';

const ProgressBar = ({percentage, color, isDarkMode}) => {
  return (
    <MainContainer>
      <TitleContainer $isDarkMode={isDarkMode}>
        <span>Time to Complete the Request Form</span>
        <span>1 mins 56 secs</span>
      </TitleContainer>
      <ProgressBarContainer>
        <ProgressDiv $percentage={percentage} $color={color}></ProgressDiv>
        <BackgroundDiv $isDarkMode={isDarkMode}></BackgroundDiv>
      </ProgressBarContainer>
    </MainContainer>
  );
};

export default ProgressBar;
