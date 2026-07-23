/* ============================================================
   tokens.js — MET Mock Test design tokens

   Source of truth for color, typography, spacing, and radii.
   Mirrors the :root block in met-shell.css. The React platform's
   MOCK_TEST_1 should import these as JS constants or as Tailwind
   theme extensions rather than redefining them locally.

   Import path (Vite/Next/Webpack):
     import tokens from '../css/tokens.js';
   Or as named exports:
     import { metAzulDeep, metOrange, metSpace5 } from '../css/tokens.js';
   ============================================================ */

export const metColor = {
  brand: {
    azulDeep: '#1B3A6B',
    azulNavy: '#0F1F4D',
    azulMid:  '#4A8EC4',
    azulBlue: '#1B5FA0',
    azulLight:'#C1D5EB',
    azulSky:  '#6FA8D8',
    azulWash: '#EEF3F9',
    orange:     '#E07000',
    orangeDark: '#B45600',
    orangeBg:   '#FFE8C9',
    red:    '#C0392B',
    green:  '#1E8449',
  },
  surface: {
    page:     '#F5F7FA',
    topbar:   '#1B3A6B', // var(--met-azul-deep)
    infobar:  '#0F1F4D', // var(--met-azul-navy)
    sidebar:  '#FFFFFF',
    sidebarBorder:'#D5DEEA',
    content:  '#FFFFFF',
    border:   '#D5DEEA',
    question: '#EEF3F9', // var(--met-azul-wash)
    player:   '#0F1F4D',
  },
  state: {
    qInfo:    '#4A8EC4',
    qInfoHover:'#1B5FA0',
    qCurrent: '#E07000',
    qAnswered:'#1E8449',
    optionBorder: '#D5DEEA',
    btnNavBg:    '#1B3A6B',
    btnNavHover: '#0F1F4D',
    btnFinishBg:    '#E07000',
    btnFinishHover: '#B45600',
    btnFinishText:  '#FFFFFF',
  },
  ink: {
    strong: '#1B3A6B',
    slate:  '#4A5568',
  },
  overlay: 'rgba(15, 31, 77, 0.55)',
};

export const metFont = {
  body:    '"Atkinson Hyperlegible", "Aptos", "Segoe UI", Tahoma, sans-serif',
  display: '"Atkinson Hyperlegible", "Aptos", "Segoe UI", Tahoma, sans-serif',
};

export const metFontSize = {
  xs: '11px',
  sm: '13px',
  md: '14px',
  lg: '16px',
  question: '18px',
  timer:    '26px',
};

export const metFontHeight = {
  base:  1.4,
  prose: 1.7,
};

export const metSpace = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
};

export const metRadius = {
  sm:   '4px',
  md:   '8px',
  pill: '999px',
};

export const metMotion = {
  base: '0.15s ease',
  fast: '0.12s ease',
  slow: '0.4s ease',
};

export const metLayout = {
  topbarMinHeight: '48px',
  sidebarMinHeight: '44px',
  modalMaxWidth: '440px',
  contentMaxWidth: '1120px',
  optionTapTarget: '44px',
};

export const metShell = {
  // Components in the test shell
  topbar: '.met-top-bar',
  infoBar: '.met-info-bar',
  sidebar: '.met-sidebar',
  contentWrap: '.met-content-wrap',
  content: '.met-content',
  bottomBar: '.met-bottom-bar',
};

export default {
  color: metColor,
  font: metFont,
  fontSize: metFontSize,
  fontHeight: metFontHeight,
  space: metSpace,
  radius: metRadius,
  motion: metMotion,
  layout: metLayout,
  shell: metShell,
};
