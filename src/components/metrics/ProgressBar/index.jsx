import {
  MainContainer,
  TitleContainer,
  Title,
  Data,
  ProgressBarContainer,
  ProgressDiv,
  BackgroundDiv,
} from './styles';

const ProgressBar = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <span>Time to Complete the Request Form</span>
        <span>1 mins 56 secs</span>
      </TitleContainer>
      <ProgressBarContainer>
        <ProgressDiv></ProgressDiv>
        <BackgroundDiv></BackgroundDiv>
      </ProgressBarContainer>
    </MainContainer>
  );
};

export default ProgressBar;
