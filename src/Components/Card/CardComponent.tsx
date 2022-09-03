import {
  CardContainer,
  CardImage,
  CardImageBlock,
  CardInner,
  CardLabel,
  CardProgressBar,
  CardProgressBarBlock,
  CardProgressBarGauge,
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
        <CardInner>
          <CardImageBlock>
            <CardImage src={require(`../../Asset/Images/${imgUrl}`)} alt="" />
            <CardLabel>
              빈 자리 ({participationNumber}/{totalPartyNumber})
            </CardLabel>
          </CardImageBlock>
          <CardTitle>제목제목제목제제목제목제제목목</CardTitle>
          <CardProgressBarBlock>
            <CardProgressBar>
              <CardProgressBarGauge
                percent={Math.floor((participationNumber / totalPartyNumber) * 100)}
              />
            </CardProgressBar>
          </CardProgressBarBlock>
        </CardInner>
      </CardWrapper>
    </CardContainer>
  );
};

export default CardComponent;
