import { ArrowPosition, Direction } from '../../types';
import { CarouselControlColor } from '../types';
import { classNames } from '../../utils/classNames';
import RightArrow from '../icons/arrow-right.svg';
import LeftArrow from '../icons/arrow-left.svg';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
  current: number;
  infinity?: boolean;
  itemsLength: number;
  visibleItemCount: number;
  arrowSize?: number | string;
  arrowPosition?: ArrowPosition;
  arrowColor?: CarouselControlColor;
}

export const Arrows = (props: ArrowsProps) => {
  const {
    onClick,
    current,
    infinity,
    arrowSize,
    arrowColor,
    itemsLength,
    visibleItemCount,
    arrowPosition = ArrowPosition.INSIDE,
  } = props;
  const showLeftArrow: boolean = infinity || current != -1;
  const showRightArrow: boolean = infinity || current != itemsLength - (visibleItemCount - 1) - 1;

  return (
    <div className={classNames('carousel-arrows-container', {}, [arrowPosition])}>
      {showLeftArrow && (
        <button
          className="left-arrow"
          aria-label="Previous slide"
          onClick={() => onClick(Direction.LEFT)}
        >
          <LeftArrow width={`${arrowSize}vw`} height={`${arrowSize}vh`} fill={arrowColor} />
        </button>
      )}
      {showRightArrow && (
        <button
          className="right-arrow"
          aria-label="Next slide"
          onClick={() => onClick(Direction.RIGHT)}
        >
          <RightArrow width={`${arrowSize}vw`} height={`${arrowSize}vh`} fill={arrowColor} />
        </button>
      )}
    </div>
  );
};
