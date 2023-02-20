import { FaUserCircle } from 'react-icons/fa';

import Image from 'Common/Image';
import { usTheme } from 'Styles/Theme/theme';

import { AvatarWithTextContainer, Circle, Text } from './AvatarWithText.style';

type Props = {
  text: string;
  avatarImageUrl?: string;
  w?: number;
  h?: number;
};

/**
 * 유저 아바타 아이콘과 텍스트를 표시하는 View 컴포넌트
 * @param text - 표시될 글자
 * @param avatarImageUrl - 아바타 이미지 URL
 * @param w - 커스텀 width | default: 36
 * @param h - 커스텀 height | default: 36
 */
export default function AvatarWithText({ text, avatarImageUrl, w = 36, h = 36 }: Props) {
  return (
    <AvatarWithTextContainer>
      <Circle w={w} h={h}>
        {avatarImageUrl ? (
          <Image imgUrl={avatarImageUrl} w={w} h={h} alt={'userImage'} />
        ) : (
          <FaUserCircle size={w} color={usTheme.colors.UsPointColor} />
        )}
      </Circle>
      <Text>{text}</Text>
    </AvatarWithTextContainer>
  );
}
