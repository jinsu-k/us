export type CoBuyingType = {
  salesUnit: string; // 판매 단위
  salePeriod: string; // 판매 기간
  participationNumber: number; // 참여 인원
  minNumber: number; // 최소 인원
};

export type CardContentsType = {
  title: string;
  price: number;
  thumbImage: string;
  cobuying?: CoBuyingType;
};
