export const TROPHY_RANKS = {
  BRONZE: 0,
  SILVER: 1,
  GOLD: 2,
  PLATINUM: 3,
} as const

export type TrophyRanks = (typeof TROPHY_RANKS)[keyof typeof TROPHY_RANKS]

export const TROPHY_RANK_NAME = {
  [TROPHY_RANKS.BRONZE]: 'ブロンズ',
  [TROPHY_RANKS.SILVER]: 'シルバー',
  [TROPHY_RANKS.GOLD]: 'ゴールド',
  [TROPHY_RANKS.PLATINUM]: 'プラチナ',
} as const

const TROPHY_CODE = {
  LV0010: 'LV0010',
  LV0020: 'LV0020',
  LV0030: 'LV0030',
  LV0040: 'LV0040',
  LV0050: 'LV0050',
  LV0060: 'LV0060',
  LV0070: 'LV0070',
  LV0080: 'LV0080',
  LV0090: 'LV0090',
  LV0100: 'LV0100',
  BKC0010: 'BKC0010',
  BKC0020: 'BKC0020',
  BKC0030: 'BKC0030',
  BKC0040: 'BKC0040',
  BKC0050: 'BKC0050',
  BKC0060: 'BKC0060',
  BKC0070: 'BKC0070',
  BKC0080: 'BKC0080',
  BKC0090: 'BKC0090',
  BKC0100: 'BKC0100',
  COM0010: 'COM0010',
  COM0020: 'COM0020',
  COM0030: 'COM0030',
  COM0040: 'COM0040',
  COM0050: 'COM0050',
  COM0060: 'COM0060',
  PGT0010: 'PGT0010',
  PGT0020: 'PGT0020',
  PGT0030: 'PGT0030',
  PGT0040: 'PGT0040',
  PGT0050: 'PGT0050',
  PGT0060: 'PGT0060',
  PGT0070: 'PGT0070',
  PGT0080: 'PGT0080',
  PGT0090: 'PGT0090',
  PGT0100: 'PGT0100',
} as const

export type TrophyCode = (typeof TROPHY_CODE)[keyof typeof TROPHY_CODE]

type TROPHY_CODE_WITH_THRESHOLD = {
  threshold: number
  trophy: TrophyCode
}[]

const LV0010 = {
  trophy_id: TROPHY_CODE.LV0010,
  name: '読書ルーキー',
  description: 'Lv.10に到達した証。たくさん読んでね',
  rank: TROPHY_RANKS.BRONZE,
}
const LV0020 = {
  trophy_id: TROPHY_CODE.LV0020,
  name: '読書中級者',
  description: 'Lv.20に到達した証。まだまだ読みましょう！',
  rank: TROPHY_RANKS.BRONZE,
}
const LV0030 = {
  trophy_id: TROPHY_CODE.LV0030,
  name: '読書ベテラン',
  description: 'Lv.30に到達した証。なかなかの本好き',
  rank: TROPHY_RANKS.SILVER,
}
const LV0040 = {
  trophy_id: TROPHY_CODE.LV0040,
  name: '読書プロフェッショナル',
  description: 'Lv.40に到達した証。たいへんよく読みました',
  rank: TROPHY_RANKS.SILVER,
}
const LV0050 = {
  trophy_id: TROPHY_CODE.LV0050,
  name: '読書マスター',
  description: 'Lv.50に到達した証。誰よりも本を読みました',
  rank: TROPHY_RANKS.SILVER,
}
const LV0060 = {
  trophy_id: TROPHY_CODE.LV0060,
  name: '読書エキスパート',
  description: 'Lv.60に到達した証。本の虫です',
  rank: TROPHY_RANKS.GOLD,
}
const LV0070 = {
  trophy_id: TROPHY_CODE.LV0070,
  name: '読書仙人',
  description: 'Lv.70に到達した証。本を食べて生きています',
  rank: TROPHY_RANKS.GOLD,
}
const LV0080 = {
  trophy_id: TROPHY_CODE.LV0080,
  name: 'King of 読書',
  description: 'Lv.80に到達した証。読書の国の王様です',
  rank: TROPHY_RANKS.GOLD,
}
const LV0090 = {
  trophy_id: TROPHY_CODE.LV0090,
  name: '読書神',
  description: 'Lv.90に到達した証。読書を創りしもの',
  rank: TROPHY_RANKS.PLATINUM,
}
const LV0100 = {
  trophy_id: TROPHY_CODE.LV0100,
  name: '読書そのもの',
  description: 'Lv.100に到達した証。あなたことが読書です',
  rank: TROPHY_RANKS.PLATINUM,
}

const BKC0010 = {
  trophy_id: TROPHY_CODE.BKC0010,
  name: '10冊',
  description: '10冊の本を読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const BKC0020 = {
  trophy_id: TROPHY_CODE.BKC0020,
  name: '20冊',
  description: '20冊の本を読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const BKC0030 = {
  trophy_id: TROPHY_CODE.BKC0030,
  name: '30冊',
  description: '30冊の本を読みました',
  rank: TROPHY_RANKS.SILVER,
}
const BKC0040 = {
  trophy_id: TROPHY_CODE.BKC0040,
  name: '40冊',
  description: '40冊の本を読みました',
  rank: TROPHY_RANKS.SILVER,
}
const BKC0050 = {
  trophy_id: TROPHY_CODE.BKC0050,
  name: '50冊',
  description: '50冊の本を読みました',
  rank: TROPHY_RANKS.SILVER,
}
const BKC0060 = {
  trophy_id: TROPHY_CODE.BKC0060,
  name: '60冊',
  description: '60冊の本を読みました',
  rank: TROPHY_RANKS.GOLD,
}
const BKC0070 = {
  trophy_id: TROPHY_CODE.BKC0070,
  name: '70冊',
  description: '70冊の本を読みました',
  rank: TROPHY_RANKS.GOLD,
}
const BKC0080 = {
  trophy_id: TROPHY_CODE.BKC0080,
  name: '80冊',
  description: '80冊の本を読みました',
  rank: TROPHY_RANKS.GOLD,
}
const BKC0090 = {
  trophy_id: TROPHY_CODE.BKC0090,
  name: '90冊',
  description: '90冊の本を読みました',
  rank: TROPHY_RANKS.PLATINUM,
}
const BKC0100 = {
  trophy_id: TROPHY_CODE.BKC0100,
  name: '100冊',
  description: '100冊の本を読みました',
  rank: TROPHY_RANKS.PLATINUM,
}

const COM0010 = {
  trophy_id: TROPHY_CODE.COM0010,
  name: 'コメント10冊',
  description: '10冊の本にコメントを書きました',
  rank: TROPHY_RANKS.BRONZE,
}
const COM0020 = {
  trophy_id: TROPHY_CODE.COM0020,
  name: 'コメント20冊',
  description: '20冊の本にコメントを書きました',
  rank: TROPHY_RANKS.SILVER,
}
const COM0030 = {
  trophy_id: TROPHY_CODE.COM0030,
  name: 'コメント30冊',
  description: '30冊の本にコメントを書きました',
  rank: TROPHY_RANKS.SILVER,
}
const COM0040 = {
  trophy_id: TROPHY_CODE.COM0040,
  name: 'コメント40冊',
  description: '40冊の本にコメントを書きました',
  rank: TROPHY_RANKS.GOLD,
}
const COM0050 = {
  trophy_id: TROPHY_CODE.COM0050,
  name: 'コメント50冊',
  description: '50冊の本にコメントを書きました',
  rank: TROPHY_RANKS.GOLD,
}
const COM0060 = {
  trophy_id: TROPHY_CODE.COM0060,
  name: 'コメント60冊',
  description: '60冊の本にコメントを書きました',
  rank: TROPHY_RANKS.PLATINUM,
}

const PGT0010 = {
  trophy_id: TROPHY_CODE.PGT0010,
  name: '500ページ突破',
  description: '累計500ページ読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const PGT0020 = {
  trophy_id: TROPHY_CODE.PGT0020,
  name: '1000ページ突破',
  description: '累計1000ページ読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const PGT0030 = {
  trophy_id: TROPHY_CODE.PGT0030,
  name: '1500ページ突破',
  description: '累計1500ページ読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const PGT0040 = {
  trophy_id: TROPHY_CODE.PGT0040,
  name: '2000ページ突破',
  description: '累計2000ページ読みました',
  rank: TROPHY_RANKS.BRONZE,
}
const PGT0050 = {
  trophy_id: TROPHY_CODE.PGT0050,
  name: '3000ページ突破',
  description: '累計3000ページ読みました',
  rank: TROPHY_RANKS.SILVER,
}
const PGT0060 = {
  trophy_id: TROPHY_CODE.PGT0060,
  name: '4000ページ突破',
  description: '累計4000ページ読みました',
  rank: TROPHY_RANKS.SILVER,
}
const PGT0070 = {
  trophy_id: TROPHY_CODE.PGT0070,
  name: '5000ページ突破',
  description: '累計5000ページ読みました',
  rank: TROPHY_RANKS.GOLD,
}
const PGT0080 = {
  trophy_id: TROPHY_CODE.PGT0080,
  name: '6000ページ突破',
  description: '累計6000ページ読みました',
  rank: TROPHY_RANKS.GOLD,
}
const PGT0090 = {
  trophy_id: TROPHY_CODE.PGT0090,
  name: '7000ページ突破',
  description: '累計7000ページ読みました',
  rank: TROPHY_RANKS.PLATINUM,
}
const PGT0100 = {
  trophy_id: TROPHY_CODE.PGT0100,
  name: '8000ページ突破',
  description: '累計8000ページ読みました',
  rank: TROPHY_RANKS.PLATINUM,
}

export const LEVEL_TROPHIES = [
  { threshold: 10, trophy: TROPHY_CODE.LV0010 },
  { threshold: 20, trophy: TROPHY_CODE.LV0020 },
  { threshold: 30, trophy: TROPHY_CODE.LV0030 },
  { threshold: 40, trophy: TROPHY_CODE.LV0040 },
  { threshold: 50, trophy: TROPHY_CODE.LV0050 },
  { threshold: 60, trophy: TROPHY_CODE.LV0060 },
  { threshold: 70, trophy: TROPHY_CODE.LV0070 },
  { threshold: 80, trophy: TROPHY_CODE.LV0080 },
  { threshold: 90, trophy: TROPHY_CODE.LV0090 },
  { threshold: 100, trophy: TROPHY_CODE.LV0100 },
] as TROPHY_CODE_WITH_THRESHOLD

export const COMPLETED_TROPHIES = [
  { threshold: 10, trophy: TROPHY_CODE.BKC0010 },
  { threshold: 20, trophy: TROPHY_CODE.BKC0020 },
  { threshold: 30, trophy: TROPHY_CODE.BKC0030 },
  { threshold: 40, trophy: TROPHY_CODE.BKC0040 },
  { threshold: 50, trophy: TROPHY_CODE.BKC0050 },
  { threshold: 60, trophy: TROPHY_CODE.BKC0060 },
  { threshold: 70, trophy: TROPHY_CODE.BKC0070 },
  { threshold: 80, trophy: TROPHY_CODE.BKC0080 },
  { threshold: 90, trophy: TROPHY_CODE.BKC0090 },
  { threshold: 100, trophy: TROPHY_CODE.BKC0100 },
] as TROPHY_CODE_WITH_THRESHOLD

export const COMMENTED_TROPHIES = [
  { threshold: 10, trophy: TROPHY_CODE.COM0010 },
  { threshold: 20, trophy: TROPHY_CODE.COM0020 },
  { threshold: 30, trophy: TROPHY_CODE.COM0030 },
  { threshold: 40, trophy: TROPHY_CODE.COM0040 },
  { threshold: 50, trophy: TROPHY_CODE.COM0050 },
  { threshold: 60, trophy: TROPHY_CODE.COM0060 },
] as TROPHY_CODE_WITH_THRESHOLD

export const PAGE_TROPHIES = [
  { threshold: 500, trophy: TROPHY_CODE.PGT0010 },
  { threshold: 1000, trophy: TROPHY_CODE.PGT0020 },
  { threshold: 1500, trophy: TROPHY_CODE.PGT0030 },
  { threshold: 2000, trophy: TROPHY_CODE.PGT0040 },
  { threshold: 3000, trophy: TROPHY_CODE.PGT0050 },
  { threshold: 4000, trophy: TROPHY_CODE.PGT0060 },
  { threshold: 5000, trophy: TROPHY_CODE.PGT0070 },
  { threshold: 6000, trophy: TROPHY_CODE.PGT0080 },
  { threshold: 7000, trophy: TROPHY_CODE.PGT0090 },
  { threshold: 8000, trophy: TROPHY_CODE.PGT0100 },
] as TROPHY_CODE_WITH_THRESHOLD

export const ALL_TROPHIES = {
  [TROPHY_CODE.LV0010]: LV0010,
  [TROPHY_CODE.LV0030]: LV0030,
  [TROPHY_CODE.LV0020]: LV0020,
  [TROPHY_CODE.LV0040]: LV0040,
  [TROPHY_CODE.LV0050]: LV0050,
  [TROPHY_CODE.LV0060]: LV0060,
  [TROPHY_CODE.LV0070]: LV0070,
  [TROPHY_CODE.LV0080]: LV0080,
  [TROPHY_CODE.LV0090]: LV0090,
  [TROPHY_CODE.LV0100]: LV0100,
  [TROPHY_CODE.BKC0010]: BKC0010,
  [TROPHY_CODE.BKC0020]: BKC0020,
  [TROPHY_CODE.BKC0030]: BKC0030,
  [TROPHY_CODE.BKC0040]: BKC0040,
  [TROPHY_CODE.BKC0050]: BKC0050,
  [TROPHY_CODE.BKC0060]: BKC0060,
  [TROPHY_CODE.BKC0070]: BKC0070,
  [TROPHY_CODE.BKC0080]: BKC0080,
  [TROPHY_CODE.BKC0090]: BKC0090,
  [TROPHY_CODE.BKC0100]: BKC0100,
  [TROPHY_CODE.COM0010]: COM0010,
  [TROPHY_CODE.COM0020]: COM0020,
  [TROPHY_CODE.COM0030]: COM0030,
  [TROPHY_CODE.COM0040]: COM0040,
  [TROPHY_CODE.COM0050]: COM0050,
  [TROPHY_CODE.COM0060]: COM0060,
  [TROPHY_CODE.PGT0010]: PGT0010,
  [TROPHY_CODE.PGT0020]: PGT0020,
  [TROPHY_CODE.PGT0030]: PGT0030,
  [TROPHY_CODE.PGT0040]: PGT0040,
  [TROPHY_CODE.PGT0050]: PGT0050,
  [TROPHY_CODE.PGT0060]: PGT0060,
  [TROPHY_CODE.PGT0070]: PGT0070,
  [TROPHY_CODE.PGT0080]: PGT0080,
  [TROPHY_CODE.PGT0090]: PGT0090,
  [TROPHY_CODE.PGT0100]: PGT0100,
}
export const getTrophyByTrophyId = (trophy_id: string) => {
  return ALL_TROPHIES[trophy_id as TrophyCode]
}
