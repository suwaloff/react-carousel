import { Direction } from '../../types';
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
          {'<'}
        </button>
      )}
      {showRightArrow && (
        <button className={'right-arrow'} onClick={() => onClick(Direction.RIGHT)}>
          {'>'}
        </button>
      )}
    </div>
  );
};
