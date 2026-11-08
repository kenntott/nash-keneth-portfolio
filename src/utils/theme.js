/**
 * Theme constants and utilities adhering to master design specifications.
 */

export const THEME_COLORS = {
  dark: {
    bg: '#08090C',
    secondary: '#111318',
    card: '#161920',
    border: '#292E38',
    text: '#FFFFFF',
    secondaryText: '#A1A1AA',
    accentGreen: '#00E5A8',
    secondaryAccent: '#61DAFB',
  },
  light: {
    bg: '#F8FAFC',
    secondary: '#FFFFFF',
    card: '#FFFFFF',
    border: '#E2E8F0',
    text: '#111827',
    secondaryText: '#64748B',
    accentGreen: '#059669',
    secondaryAccent: '#0891B2',
  },
};

export const getThemeColor = (isDark, colorKey) => {
  return isDark ? THEME_COLORS.dark[colorKey] : THEME_COLORS.light[colorKey];
};
