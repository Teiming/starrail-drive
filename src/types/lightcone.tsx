import { everyLightcone } from 'database/lightcone';
import { EveryPath } from './every';

export type EveryLightcone = (typeof everyLightcone)[number];

export const everyLightconeRarity = [5, 4, 3] as const;
export type EveryLightconeRarity = (typeof everyLightconeRarity)[number];

export const lightconeDBs: {
  name: EveryLightcone;
  rarity: EveryLightconeRarity;
  path: EveryPath;
}[] = [
  { name: '어떤 에이언즈의 몰락', rarity: 5, path: '파멸' },
  { name: '푸른 하늘 아래', rarity: 4, path: '파멸' },
  { name: '두더지파가 환영해', rarity: 4, path: '파멸' },
  { name: '멍! 산책 시간!', rarity: 4, path: '파멸' },
  { name: '비밀 맹세', rarity: 4, path: '파멸' },

  { name: '팔로우를 부탁해!', rarity: 4, path: '수렵' },
  { name: '움트는 봄물', rarity: 4, path: '수렵' },
  { name: '침묵만이', rarity: 4, path: '수렵' },

  { name: '은하철도의 밤', rarity: 5, path: '지식' },
  { name: '천재들의 휴식', rarity: 4, path: '지식' },
  { name: '오늘도 평화로운 하루', rarity: 4, path: '지식' },
  { name: '느낌 있는 아침 식사 루틴', rarity: 4, path: '지식' },
  { name: '세상을 진정시키지 마', rarity: 4, path: '지식' },
  { name: '「나」의 탄생', rarity: 4, path: '지식' },

  { name: '과거와 미래', rarity: 4, path: '화합' },
  { name: '댄스! 댄스! 댄스!', rarity: 4, path: '화합' },
  { name: '누월재운의 뜻', rarity: 4, path: '화합' },
  { name: '행성과의 만남', rarity: 4, path: '화합' },
  { name: '기억 속 모습', rarity: 4, path: '화합' },
  { name: '맞물린 톱니', rarity: 3, path: '화합' },

  { name: '고독의 치유', rarity: 5, path: '공허' },
  { name: '페르마타', rarity: 4, path: '공허' },
  { name: '땀방울처럼 빛나는 결심', rarity: 4, path: '공허' },
  { name: '사냥감의 시선', rarity: 4, path: '공허' },
  { name: '밤 인사와 잠든 얼굴', rarity: 4, path: '공허' },

  { name: '기억의 소재', rarity: 5, path: '보존' },
  { name: '우리는 와일드 파이어', rarity: 4, path: '보존' },
  { name: '우주 시장 동향', rarity: 4, path: '보존' },
  { name: '랜도의 선택', rarity: 4, path: '보존' },
  { name: '여생의 첫날', rarity: 4, path: '보존' },

  { name: '저기, 나 여기 있어', rarity: 4, path: '풍요' },
  { name: '등가교환', rarity: 4, path: '풍요' },
  { name: '같은 심정', rarity: 4, path: '풍요' },
  { name: '수술 후의 대화', rarity: 4, path: '풍요' },
];
