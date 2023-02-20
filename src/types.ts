export type CoBuyingType = {
  salesUnit: string; // 판매 단위
  salePeriod: string; // 판매 기간
  participationNumber: number; // 참여 인원
  minNumber: number; // 최소 인원
};

export type CardContentsType = {
  id: string;
  title: string;
  price: number;
  thumbImage: string;
  cobuying?: CoBuyingType;
};

export type Comment = {
  userName: string;
  comments: string;
  updatedAt: string;
};
