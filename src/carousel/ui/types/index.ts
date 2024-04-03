import { ImgProps } from '../Item/Img/Img';

export interface CarouselItem {
  img?: ImgProps;
  text?: string;
}

export type CarouselListItems = Array<CarouselItem>;

export enum Direction {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}
