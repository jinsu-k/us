import {
  CardContainer,
  CardImage,
  CardImageBlock,
  CardLabel,
  CardProgressBar,
  CardProgressBarGauge,
  CardProgressBarWrapper,
  CardTitle,
  CardWrapper,
} from './CardStyle';

type CardComponentProps = {
  imgUrl: string;
  totalPartyNumber: number;
  participationNumber: number;
};

const CardComponent = ({ imgUrl, totalPartyNumber, participationNumber }: CardComponentProps) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardProgressBarWrapper>
          <CardProgressBar>
            <CardProgressBarGauge
              percent={Math.floor((participationNumber / totalPartyNumber) * 100)}
            />
          </CardProgressBar>
        </CardProgressBarWrapper>
        <CardImageBlock>
          <CardImage src={require(`../../Asset/Images/${imgUrl}`)} alt="" />
          <CardLabel>
            너만 오면 Go! ({participationNumber}/{totalPartyNumber})
          </CardLabel>
        </CardImageBlock>
        <CardTitle>제목제목제목제제목제목제목제목목</CardTitle>
      </CardWrapper>
    </CardContainer>
  );
};

export default CardComponent;
