import colorLib from '@kurkle/color';

export const CHART_COLORS = {
  red: ' rgb(249, 25, 14)',
  orange: 'rgb(254, 148, 15)',
  yellow: 'rgb(254, 254, 66)',
  green: 'rgb(133, 187, 101)',
  blue: 'rgb(18, 10, 143)',
  purple: 'rgb(153, 102, 204)',
  grey: 'rgb(192, 192, 192)'
};

export function transparentize(value: string, opacity: number) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}