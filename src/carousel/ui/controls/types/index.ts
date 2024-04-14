type classicColor =
  | 'aqua'
  | 'black'
  | 'blue'
  | 'fuchsia'
  | 'gray'
  | 'green'
  | 'lime'
  | 'maroon'
  | 'navy'
  | 'olive'
  | 'purple'
  | 'red'
  | 'silver'
  | 'teal'
  | 'white'
  | 'yellow'
  | 'transparent';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type CarouselControlColor = RGB | RGBA | HEX | classicColor;
