export const everyPage = ['캐릭터', '광추', '유물'] as const;
export type EveryPage = (typeof everyPage)[number];

export const everyMode = ['', '추가', '수정', '상세'] as const;
export type EveryMode = (typeof everyMode)[number];
