export interface RelicSubopt {
  1: { key: string; value: string };
  2: { key: string; value: string };
  3: { key: string; value: string };
  4: { key: string; value: string };
}

export default interface Relic {
  레벨: number;
  세트: string;
  주옵션: string;
  부옵션: RelicSubopt;
  착용?: string;
}
