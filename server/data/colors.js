const SOLARIZED_COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW_COLORS = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FEM_COLORS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COMPATIBLE_COLORS = [
  {
    colorName: 'Teal',
    hexCode: '#3FB8AF',
  },
  {
    colorName: 'Light teal',
    hexCode: '#7FC7AF',
  },
  {
    colorName: 'Yellow',
    hexCode: '#DAD8A7',
  },
  {
    colorName: 'Pink',
    hexCode: '#FF9E9D',
  },
  {
    colorName: 'Dark Pink',
    hexCode: '#FF3D7F',
  },
];

const THOUGHT_COLORS = [
  {
    colorName: 'Yellow',
    hexCode: '#ECD078',
  },
  {
    colorName: 'Orange',
    hexCode: '#D95B43',
  },
  {
    colorName: 'Red',
    hexCode: '#C02942',
  },
  {
    colorName: 'Crimson',
    hexCode: '#542437',
  },
  {
    colorName: 'Clay',
    hexCode: '#53777A',
  },
];

export const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED_COLORS },
  { paletteName: 'Rainbow', colors: RAINBOW_COLORS },
  { paletteName: 'FEM', colors: FEM_COLORS },
  { paletteName: 'Compatible', colors: COMPATIBLE_COLORS },
  { paletteName: 'Thought provoking', colors: THOUGHT_COLORS },
];
