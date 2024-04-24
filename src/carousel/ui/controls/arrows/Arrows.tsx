import { CarouselControlColor } from '../types';
import { Direction } from '../../types';
import RightArrow from '../icons/arrow-right.svg';
import LeftArrow from '../icons/arrow-left.svg';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
  current: number;
  itemsLength: number;
  visibleItemCount: number;
  arrowColor?: CarouselControlColor;
  arrowSize?: number | string;
  infinity?: boolean;
}

export const Arrows = ({
  onClick,
  current,
  itemsLength,
  visibleItemCount,
  arrowColor,
  arrowSize,
  infinity,
}: ArrowsProps) => {
  const showLeftArrow: boolean = infinity || current != 0;
  const showRightArrow: boolean = infinity || current != itemsLength - (visibleItemCount - 1);

  return (
    <div className={'Arrows'}>
      {showLeftArrow && (
        <button className={'left-arrow'} onClick={() => onClick(Direction.LEFT)}>
          <LeftArrow width={`${arrowSize}vw`} height={`${arrowSize}vh`} fill={arrowColor} />
        </button>
      )}
      {showRightArrow && (
        <button className={'right-arrow'} onClick={() => onClick(Direction.RIGHT)}>
          <RightArrow width={`${arrowSize}vw`} height={`${arrowSize}vh`} fill={arrowColor} />
        </button>
      )}
    </div>
  );
};
