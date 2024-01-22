export const everyElement = ['물리', '화염', '얼음', '번개', '바람', '양자', '허수'] as const;
export type EveryElement = (typeof everyElement)[number];

export const everyPath = ['파멸', '수렵', '지식', '화합', '공허', '보존', '풍요'] as const;
export type EveryPath = (typeof everyPath)[number];

export const everyRelicSlot = ['머리', '팔', '몸통', '다리', '구체', '매듭'] as const;
export type EveryRelicSlot = (typeof everyRelicSlot)[number];
// export type EveryRelicSlot = '머리' | '팔' | '몸통' | '다리' | '구체' | '매듭';

export type EveryAscension = 0 | 1 | 2 | 3 | 4 | 5 | 6;
