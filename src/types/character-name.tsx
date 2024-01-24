import { EveryElement, EveryPath } from './every';

export const everyCharacterDB: { [key in EveryCharacter]: [EveryElement, EveryPath] } = {
  'Dr. 레이시오': ['허수', '수렵'],
  'Mar. 7th': ['얼음', '보존'],
  게파드: ['얼음', '보존'],
  경류: ['얼음', '파멸'],
  경원: ['번개', '지식'],
  계네빈: ['화염', '공허'],
  곽향: ['바람', '풍요'],
  나찰: ['허수', '풍요'],
  나타샤: ['물리', '풍요'],
  단항: ['바람', '수렵'],
  '단항·음월': ['허수', '파멸'],
  루카: ['물리', '공허'],
  링스: ['양자', '풍요'],
  미샤: ['얼음', '파멸'],
  백로: ['번개', '풍요'],
  부현: ['양자', '보존'],
  브로냐: ['바람', '화합'],
  '블랙 스완': ['바람', '공허'],
  블레이드: ['바람', '파멸'],
  삼포: ['바람', '공허'],
  서벌: ['번개', '지식'],
  설의: ['양자', '파멸'],
  소상: ['물리', '수렵'],
  스파클: ['양자', '화합'],
  아를란: ['번개', '파멸'],
  아스타: ['화염', '화합'],
  아젠티: ['물리', '지식'],
  아케론: ['번개', '공허'],
  어공: ['허수', '화합'],
  연경: ['얼음', '수렵'],
  '완·매': ['얼음', '화합'],
  웰트: ['허수', '공허'],
  은랑: ['양자', '공허'],
  정운: ['번개', '화합'],
  제레: ['양자', '수렵'],
  청작: ['양자', '지식'],
  카프카: ['번개', '공허'],
  클라라: ['물리', '파멸'],
  '토파즈 & 복순이': ['화염', '수렵'],
  페라: ['얼음', '공허'],
  한아: ['물리', '화합'],
  헤르타: ['얼음', '지식'],
  후크: ['화염', '파멸'],
  히메코: ['화염', '지식'],
};

const everyPhysicalCharacter = ['나타샤', '루카', '소상', '아젠티', '클라라', '한아'] as const;
const everyFireCharacter = ['계네빈', '아스타', '토파즈 & 복순이', '후크', '히메코'] as const;
const everyIceCharacter = [
  '미샤',
  '완·매',
  '경류',
  '연경',
  '페라',
  '게파드',
  '헤르타',
  'Mar. 7th',
] as const;
const everyLightningCharacter = [
  '아케론',
  '카프카',
  '백로',
  '경원',
  '정운',
  '서벌',
  '아를란',
] as const;
const everyWindCharacter = ['곽향', '단항', '브로냐', '블랙 스완', '블레이드', '삼포'] as const;
const everyQuantumCharacter = ['링스', '부현', '설의', '스파클', '은랑', '제레', '청작'] as const;
const everyImaginaryCharacter = ['Dr. 레이시오', '나찰', '단항·음월', '어공', '웰트'] as const;

export const everyCharacter = [
  ...everyPhysicalCharacter,
  ...everyFireCharacter,
  ...everyIceCharacter,
  ...everyLightningCharacter,
  ...everyWindCharacter,
  ...everyQuantumCharacter,
  ...everyImaginaryCharacter,
] as const;
export type EveryCharacter = (typeof everyCharacter)[number];
export type EveryCharacterWithTrailblazer = EveryCharacter | '개척자';
