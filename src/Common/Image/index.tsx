type Props = {
  imgUrl: string;
  w?: number | string;
  h?: number | string;
  alt?: string;
};

/**
 * 공통 이미지 View 컴포넌트
 * @param imgUrl - 이미지 URL
 * @param w - 커스텀 이미지 width | default: 150 px
 * @param h - 커스텀 이미지 height | default: auto
 * @param alt - alt 텍스트
 */
export default function Image({ imgUrl, w = 150, h, alt = '' }: Props) {
  return (
    <img
      src={imgUrl}
      width={typeof w === 'number' ? `${w}px` : w}
      height={typeof h === 'number' ? `${h}px` : h}
      alt={alt}
      style={{ borderRadius: '10px' }}
    />
  );
}
