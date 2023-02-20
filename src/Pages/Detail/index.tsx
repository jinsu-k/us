import Image from 'Common/Image';
import Layout from 'Common/Layout/Layout';
import Carousel from 'Common/Carousel/Carousel';
import AvatarWithText from 'Components/User/AvatarWithText';

import {
  CommentsWrapper,
  ContentsTitle,
  ContentsInfoBlock,
  ContentsWrapper,
  DetailContainer,
  Hr,
  ImageBlock,
  MainTextBlock,
  CommentsInfo,
} from './Detail.style';
import Comments from 'Components/Comments';
import { Comment } from 'types';
import CommentsInput from 'Components/Comments/CommentsInputBox';

/**
 * 임시 이미지 데이터
 */
const IMAGE_URL_LIST = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
const COMMENTS_LIST: Comment[] = [
  {
    userName: 'Test User 1',
    updatedAt: '2023-02-10',
    comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    userName: 'Test User 2',
    updatedAt: '2023-02-13',
    comments:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
  {
    userName: 'Test User 3',
    updatedAt: '2023-02-14',
    comments:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.',
  },
  {
    userName: 'Test User 4',
    updatedAt: '2023-02-20',
    comments: 'Nunc volutpat quam eget pretium placerat.',
  },
];

/**
 * 디테일 페이지
 */
export default function Detail() {
  return (
    <Layout>
      <DetailContainer>
        {/* 글 내용 View */}
        <ContentsWrapper>
          {/* 글 이미지 슬라이더 */}
          <Carousel
            customSettings={{
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
          >
            {IMAGE_URL_LIST.map(img => {
              return (
                <ImageBlock key={`Image_${img}`}>
                  <Image imgUrl={require(`../../Common/Asset/Images/${img}`)} w={'100%'} h={500} />
                </ImageBlock>
              );
            })}
          </Carousel>
          {/* 글 유저 정보 및 등록 날짜 */}
          <ContentsInfoBlock>
            <AvatarWithText text={'userName'} />
          </ContentsInfoBlock>
          {/* 구분선 */}
          <Hr />
          <ContentsTitle>Lorem Ipsum</ContentsTitle>
          {/* 글 본문 */}
          <MainTextBlock>
            Mauris lacus metus, pretium vel maximus sit amet, aliquam ultricies nulla. <br />
            <br />
            Sed libero arcu, porta eleifend est sit amet, commodo pellentesque metus. Praesent
            faucibus velit tincidunt ullamcorper hendrerit. Vestibulum quis eros scelerisque,
            fermentum libero ac, tristique elit. Duis dictum tellus turpis. Aliquam venenatis tellus
            vitae ipsum maximus auctor. Mauris enim ex, consequat rhoncus tempus congue, condimentum
            vel lacus. Vestibulum efficitur eget velit ut semper. Duis at lobortis urna, sed
            tincidunt mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
            <br />
            <br /> Nunc tempor auctor felis id aliquam. Donec molestie egestas risus, vel commodo
            purus vehicula non. Suspendisse dignissim mi ut placerat commodo. Integer imperdiet,
            diam id tincidunt scelerisque, leo lectus mattis risus, suscipit gravida lacus justo et
            libero. Phasellus in massa nec eros rhoncus suscipit sed sed tortor. Vestibulum bibendum
            nisl ornare lacus viverra, ut sodales est fermentum. Curabitur at nulla est. Morbi id
            lacus non enim feugiat pharetra ac ac tortor. Etiam nec erat felis. Curabitur et metus
            in leo mattis aliquet. Phasellus interdum lacinia diam ut consequat. Ut fringilla eu
            nunc vitae sagittis. Duis auctor placerat enim in finibus. Vivamus molestie et quam et
            gravida. Cras convallis ultricies ex, eu ultricies lectus elementum feugiat.
            Pellentesque blandit urna ut massa fringilla volutpat. Phasellus tempor felis efficitur,
            porta purus eget, pharetra diam. Curabitur pharetra quam quis felis mattis, id aliquet
            magna semper. Morbi condimentum massa quis mollis gravida. Nam vitae lectus at dolor
            semper tincidunt. Phasellus ut massa condimentum, suscipit dui a, elementum ex.
            Curabitur eu magna vitae lorem efficitur mollis. Proin at gravida nunc, sed dapibus
            nisi. <br /> <br />
            Vivamus id magna in nisi finibus interdum vel vel sem. Proin ac iaculis ipsum. Sed sit
            amet arcu porta, tempor nisl ut, vestibulum sem. Donec scelerisque nec arcu eget mollis.
            Nunc nec enim non est consectetur suscipit a ac nisl. Nunc non justo quis ex pharetra
            auctor non sed ante. Mauris gravida, nisl quis facilisis consectetur, odio nisi
            vestibulum nisi, non blandit justo nunc eleifend augue. Curabitur varius velit ac felis
            placerat convallis. In hac habitasse platea dictumst. Integer laoreet, justo vitae
            auctor tincidunt, nibh massa mollis arcu, nec faucibus orci turpis eu quam. Vivamus
            elementum, erat nec euismod venenatis, quam nisl dictum enim, eget porta nisi nunc in
            quam. Ut vitae ornare orci. Cras hendrerit semper lacus a euismod. Ut et congue mi, id
            facilisis purus. Pellentesque commodo felis nec convallis pellentesque. Curabitur
            venenatis diam ac vehicula rutrum. In hac habitasse platea dictumst. Nulla viverra
            condimentum ligula, non mollis risus aliquam vitae. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Etiam efficitur dolor in augue
            efficitur porttitor in ac felis. Duis tempor erat leo, et posuere enim ultricies vel. Ut
            pellentesque mauris a tellus feugiat accumsan. Donec auctor mattis ullamcorper. Sed in
            lobortis justo. Fusce rutrum scelerisque auctor. Sed pharetra blandit neque vel
            tincidunt.
            <br />
            <br />
            <br />
            <img
              src={require(`../../Common/Asset/Images/${IMAGE_URL_LIST[0]}`)}
              width="100%"
              alt=""
            />
            <img
              src={require(`../../Common/Asset/Images/${IMAGE_URL_LIST[1]}`)}
              width="100%"
              alt=""
            />
            <img
              src={require(`../../Common/Asset/Images/${IMAGE_URL_LIST[2]}`)}
              width="100%"
              alt=""
            />
          </MainTextBlock>
          {/* 구분선 */}
          <Hr />
        </ContentsWrapper>
        {/* 리뷰 내용 View */}
        <CommentsWrapper>
          <CommentsInfo>{COMMENTS_LIST.length}개의 댓글</CommentsInfo>
          {COMMENTS_LIST.map(comment => (
            <Comments key={comment.userName} comment={comment} />
          ))}
          <CommentsInput />
        </CommentsWrapper>
      </DetailContainer>
    </Layout>
  );
}
