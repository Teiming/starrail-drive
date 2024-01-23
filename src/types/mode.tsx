export const everyMode = ['캐릭터', '광추', '유물'] as const;
export type EveryMode = (typeof everyMode)[number];

export const everySubMode = ['', '추가', '수정', '상세'] as const;
export type EverySubMode = (typeof everySubMode)[number];
