import { classNames } from '../../helpers/classNames';
import { CarouselControlColor } from '../types';
import './Dots.css';

export enum DotsTheme {
  RECTANGLE = 'carousel-dots--rectangle',
  ROUND = 'carousel-dots--round',
  LINE = 'carousel-dots--line',
}

interface DotsProps {
  className?: string;
  onClick: (position?: number) => void;
  quantity: number;
  current: number;
  dotsTheme?: DotsTheme;
  dotsColor?: CarouselControlColor;
}

export const Dots = (props: DotsProps) => {
  const {
    current,
    onClick,
    quantity,
    className,
    dotsColor,
    dotsTheme = DotsTheme.RECTANGLE,
  } = props;

  const dots = new Array(quantity + 1).fill(0);

  return (
    <div className="carousel-dots">
      {dots.map((value, index) => (
        <button
          className={classNames('dot', { ['carousel-dots--checked']: current === index }, [
            className,
            dotsTheme,
          ])}
          onClick={() => onClick(index)}
          key={index}
          style={{ backgroundColor: dotsColor }}
        ></button>
      ))}
    </div>
  );
};
