import { Direction } from '../../types';
import RightArrow from '../icons/arrow-right.svg';
import LeftArrow from '../icons/arrow-left.svg';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
  current: number;
  itemsLength: number;
  visibleItemCount: number;
  arrowColor?: string;
  arrowSize?: number | string;
}

export const Arrows = ({
  onClick,
  current,
  itemsLength,
  visibleItemCount,
  arrowColor,
  arrowSize,
}: ArrowsProps) => {
  const showLeftArrow: boolean = current != 0;
  const showRightArrow: boolean = current != itemsLength - (visibleItemCount - 1);

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
