const physical = '물리';
const fire = '화염';
const ice = '얼음';
const lightning = '번개';
const wind = '바람';
const quantum = '양자';
const imaginary = '허수';

export const everyElement = [physical, fire, ice, lightning, wind, quantum, imaginary] as const;
export type EveryElement = (typeof everyElement)[number];

const destruction = '파멸';
const hunt = '수렵';
const erudition = '지식';
const harmory = '화합';
const nihility = '공허';
const preservation = '보존';
const abundance = '풍요';

export const everyPath = [
  destruction,
  hunt,
  erudition,
  harmory,
  nihility,
  preservation,
  abundance,
] as const;
export type EveryPath = (typeof everyPath)[number];

export const everyRelicsSlot = ['머리', '팔', '몸통', '다리', '구체', '매듭'] as const;
export type EveryRelicsSlot = (typeof everyRelicsSlot)[number];

export type EveryAscension = 0 | 1 | 2 | 3 | 4 | 5 | 6;
