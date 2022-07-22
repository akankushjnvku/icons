export interface Badge {
  color: string;
}

export const generateBadges = (
  hasFilledVariant: boolean, 
  oldName: string | undefined
  ): Badge[] => {
  const badges = [];
  if (oldName) {
    badges.push({ color: '#f53636' });
  }

  if (hasFilledVariant) {
    badges.push({ color: '#00b9ff' });
  }

  return badges;
};
