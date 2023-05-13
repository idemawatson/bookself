import { ClientTrophy } from "@/types/ClientTrophy";

export const TROPHY_RANKS = {
  BRONZE: 0,
  SILVER: 1,
  GOLD: 2,
  PLATINUM: 3,
} as const;

export type TrophyRanks = (typeof TROPHY_RANKS)[keyof typeof TROPHY_RANKS];

type TROHIES_WITH_THRESHOLD = {
  threshold: number;
  trophy: ClientTrophy;
}[];

const LV0010 = {
  id: "LV-0010",
  name: "読書ルーキー",
  description: "Lv.10に到達した証。たくさん読んでね",
  rank: TROPHY_RANKS.BRONZE,
};
const LV0020 = {
  id: "LV-0020",
  name: "読書中級者",
  description: "Lv.20に到達した証。まだまだ読みましょう！",
  rank: TROPHY_RANKS.BRONZE,
};
const LV0030 = {
  id: "LV-0030",
  name: "読書ベテラン",
  description: "Lv.30に到達した証。なかなかの本好き",
  rank: TROPHY_RANKS.SILVER,
};
const LV0040 = {
  id: "LV-0040",
  name: "読書プロフェッショナル",
  description: "Lv.40に到達した証。たいへんよく読みました",
  rank: TROPHY_RANKS.SILVER,
};
const LV0050 = {
  id: "LV-0050",
  name: "読書マスター",
  description: "Lv.50に到達した証。誰よりも本を読みました",
  rank: TROPHY_RANKS.SILVER,
};
const LV0060 = {
  id: "LV-0060",
  name: "読書エキスパート",
  description: "Lv.60に到達した証。本の虫です",
  rank: TROPHY_RANKS.GOLD,
};
const LV0070 = {
  id: "LV-0070",
  name: "読書仙人",
  description: "Lv.70に到達した証。本を食べて生きています",
  rank: TROPHY_RANKS.GOLD,
};
const LV0080 = {
  id: "LV-0080",
  name: "King of 読書",
  description: "Lv.80に到達した証。読書の国の王様です",
  rank: TROPHY_RANKS.GOLD,
};
const LV0090 = {
  id: "LV-0090",
  name: "読書神",
  description: "Lv.90に到達した証。読書を創りしもの",
  rank: TROPHY_RANKS.PLATINUM,
};
const LV0100 = {
  id: "LV-0100",
  name: "読書そのもの",
  description: "Lv.100に到達した証。あなたことが読書です",
  rank: TROPHY_RANKS.PLATINUM,
};

const BKC0010 = {
  id: "BKC-0010",
  name: "10冊",
  description: "10冊の本を読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const BKC0020 = {
  id: "BKC-0020",
  name: "20冊",
  description: "20冊の本を読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const BKC0030 = {
  id: "BKC-0030",
  name: "30冊",
  description: "30冊の本を読みました",
  rank: TROPHY_RANKS.SILVER,
};
const BKC0040 = {
  id: "BKC-0040",
  name: "40冊",
  description: "40冊の本を読みました",
  rank: TROPHY_RANKS.SILVER,
};
const BKC0050 = {
  id: "BKC-0050",
  name: "50冊",
  description: "50冊の本を読みました",
  rank: TROPHY_RANKS.SILVER,
};
const BKC0060 = {
  id: "BKC-0060",
  name: "60冊",
  description: "60冊の本を読みました",
  rank: TROPHY_RANKS.GOLD,
};
const BKC0070 = {
  id: "BKC-0070",
  name: "70冊",
  description: "70冊の本を読みました",
  rank: TROPHY_RANKS.GOLD,
};
const BKC0080 = {
  id: "BKC-0080",
  name: "80冊",
  description: "80冊の本を読みました",
  rank: TROPHY_RANKS.GOLD,
};
const BKC0090 = {
  id: "BKC-0090",
  name: "90冊",
  description: "90冊の本を読みました",
  rank: TROPHY_RANKS.PLATINUM,
};
const BKC0100 = {
  id: "BKC-0100",
  name: "100冊",
  description: "100冊の本を読みました",
  rank: TROPHY_RANKS.PLATINUM,
};

const COM0010 = {
  id: "COM-0010",
  name: "コメント10冊",
  description: "10冊の本にコメントを書きました",
  rank: TROPHY_RANKS.BRONZE,
};
const COM0020 = {
  id: "COM-0020",
  name: "コメント20冊",
  description: "20冊の本にコメントを書きました",
  rank: TROPHY_RANKS.SILVER,
};
const COM0030 = {
  id: "COM-0030",
  name: "コメント30冊",
  description: "30冊の本にコメントを書きました",
  rank: TROPHY_RANKS.SILVER,
};
const COM0040 = {
  id: "COM-0040",
  name: "コメント40冊",
  description: "40冊の本にコメントを書きました",
  rank: TROPHY_RANKS.GOLD,
};
const COM0050 = {
  id: "COM-0050",
  name: "コメント50冊",
  description: "50冊の本にコメントを書きました",
  rank: TROPHY_RANKS.GOLD,
};
const COM0060 = {
  id: "COM-0060",
  name: "コメント60冊",
  description: "60冊の本にコメントを書きました",
  rank: TROPHY_RANKS.PLATINUM,
};

const PGT0010 = {
  id: "PGT-0010",
  name: "500ページ突破",
  description: "累計500ページ読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const PGT0020 = {
  id: "PGT-0020",
  name: "1000ページ突破",
  description: "累計1000ページ読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const PGT0030 = {
  id: "PGT-0030",
  name: "1500ページ突破",
  description: "累計1500ページ読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const PGT0040 = {
  id: "PGT-0040",
  name: "2000ページ突破",
  description: "累計2000ページ読みました",
  rank: TROPHY_RANKS.BRONZE,
};
const PGT0050 = {
  id: "PGT-0050",
  name: "3000ページ突破",
  description: "累計3000ページ読みました",
  rank: TROPHY_RANKS.SILVER,
};
const PGT0060 = {
  id: "PGT-0060",
  name: "4000ページ突破",
  description: "累計4000ページ読みました",
  rank: TROPHY_RANKS.SILVER,
};
const PGT0070 = {
  id: "PGT-0070",
  name: "5000ページ突破",
  description: "累計5000ページ読みました",
  rank: TROPHY_RANKS.GOLD,
};
const PGT0080 = {
  id: "PGT-0080",
  name: "6000ページ突破",
  description: "累計6000ページ読みました",
  rank: TROPHY_RANKS.GOLD,
};
const PGT0090 = {
  id: "PGT-0090",
  name: "7000ページ突破",
  description: "累計7000ページ読みました",
  rank: TROPHY_RANKS.PLATINUM,
};
const PGT0100 = {
  id: "PGT-0100",
  name: "8000ページ突破",
  description: "累計8000ページ読みました",
  rank: TROPHY_RANKS.PLATINUM,
};

export const LEVEL_TROPHIES = [
  { threshold: 10, trophy: LV0010 },
  { threshold: 20, trophy: LV0020 },
  { threshold: 30, trophy: LV0030 },
  { threshold: 40, trophy: LV0040 },
  { threshold: 50, trophy: LV0050 },
  { threshold: 60, trophy: LV0060 },
  { threshold: 70, trophy: LV0070 },
  { threshold: 80, trophy: LV0080 },
  { threshold: 90, trophy: LV0090 },
  { threshold: 100, trophy: LV0100 },
] as TROHIES_WITH_THRESHOLD;

export const COMPLETED_TROPHIES = [
  { threshold: 10, trophy: BKC0010 },
  { threshold: 20, trophy: BKC0020 },
  { threshold: 30, trophy: BKC0030 },
  { threshold: 40, trophy: BKC0040 },
  { threshold: 50, trophy: BKC0050 },
  { threshold: 60, trophy: BKC0060 },
  { threshold: 70, trophy: BKC0070 },
  { threshold: 80, trophy: BKC0080 },
  { threshold: 90, trophy: BKC0090 },
  { threshold: 100, trophy: BKC0100 },
] as TROHIES_WITH_THRESHOLD;

export const COMMENTED_TROPHIES = [
  { threshold: 10, trophy: COM0010 },
  { threshold: 20, trophy: COM0020 },
  { threshold: 30, trophy: COM0030 },
  { threshold: 40, trophy: COM0040 },
  { threshold: 50, trophy: COM0050 },
  { threshold: 60, trophy: COM0060 },
] as TROHIES_WITH_THRESHOLD;

export const PAGE_TROPHIES = [
  { threshold: 500, trophy: PGT0010 },
  { threshold: 1000, trophy: PGT0020 },
  { threshold: 1500, trophy: PGT0030 },
  { threshold: 2000, trophy: PGT0040 },
  { threshold: 3000, trophy: PGT0050 },
  { threshold: 4000, trophy: PGT0060 },
  { threshold: 5000, trophy: PGT0070 },
  { threshold: 6000, trophy: PGT0080 },
  { threshold: 7000, trophy: PGT0090 },
  { threshold: 8000, trophy: PGT0100 },
] as TROHIES_WITH_THRESHOLD;
