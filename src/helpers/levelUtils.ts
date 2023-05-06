export const LEVEL_UP_BASE_EXPERIENCE = 10;
export const LEVEL_UP_EXPERIENCE_MULTIPLIER = 50;

export const calcLevel = (totalPages: number) => {
  let restPages = totalPages;
  let level = 1;
  while (restPages >= getNextLevelPages(level)) {
    restPages -= getNextLevelPages(level);
    level++;
  }
  return level;
};

export const getNextLevelPages = (level: number): number => {
  return Math.floor(
    LEVEL_UP_BASE_EXPERIENCE * level +
      LEVEL_UP_EXPERIENCE_MULTIPLIER * 1.05 ** (level - 1)
  );
};

export const getRestExperience = (
  level: number,
  totalPages: number
): number => {
  return getNextLevelPages(level) - totalPages;
};

export const getProgress = (level: number, totalPages: number): number => {
  return Math.floor(
    (getRestExperience(level, totalPages) / getNextLevelPages(level)) * 100
  );
};
