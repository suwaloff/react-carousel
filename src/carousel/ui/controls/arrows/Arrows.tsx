import { Direction } from '../../types';
import RightArrow from '../icons/arrow-right.svg';
import LeftArrow from '../icons/arrow-left.svg';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
  current: number;
  itemsLength: number;
  visibleItemCount: number;
}

export const Arrows = ({ onClick, current, itemsLength, visibleItemCount }: ArrowsProps) => {
  const showLeftArrow: boolean = current != 0;
  const showRightArrow: boolean = current != itemsLength - (visibleItemCount - 1);

  return (
    <div className={'Arrows'}>
      {showLeftArrow && (
        <button className={'left-arrow'} onClick={() => onClick(Direction.LEFT)}>
          <LeftArrow width={'6vw'} height={'6vh'} />
        </button>
      )}
      {showRightArrow && (
        <button className={'right-arrow'} onClick={() => onClick(Direction.RIGHT)}>
          <RightArrow width={'6vw'} height={'6vh'} />
        </button>
      )}
    </div>
  );
};
