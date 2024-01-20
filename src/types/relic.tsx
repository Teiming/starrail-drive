import { EveryRelicSlot } from './union';

export interface RelicSubOption {
  [key: string]: number;
}

export default interface Relic {
  레벨: number;
  세트: string;
  부위: EveryRelicSlot;
  주옵션: string;
  부옵션: RelicSubOption;
  착용: string;
}

export const everySubOptionList = [
  'HP',
  '공격력',
  '방어력',
  'HP%',
  '공격력%',
  '방어력%',
  '속도',
  '치명타 확률',
  '치명타 피해',
  '효과 명중',
  '효과 저항',
  '격파 특수효과',
];
