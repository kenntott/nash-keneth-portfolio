/**
 * Theme constants and utilities adhering to Adelina-inspired visual direction.
 */

export const THEME_COLORS = {
  dark: {
    bg: '#07070B',
    secondary: '#0E0E18',
    card: '#131322',
    border: '#242338',
    text: '#FFFFFF',
    secondaryText: '#9E9EB8',
    accent: '#8B5CF6',
    accentHover: '#7C3AED',
    secondaryAccent: '#38BDF8',
    accentPink: '#EC4899',
  },
  light: {
    bg: '#FAFAFD',
    secondary: '#FFFFFF',
    card: '#FFFFFF',
    border: '#E4E4F2',
    text: '#0F172A',
    secondaryText: '#64748B',
    accent: '#7C3AED',
    accentHover: '#6D28D9',
    secondaryAccent: '#0284C7',
    accentPink: '#DB2777',
  },
};

export const getThemeColor = (isDark, colorKey) => {
  return isDark ? THEME_COLORS.dark[colorKey] : THEME_COLORS.light[colorKey];
};
