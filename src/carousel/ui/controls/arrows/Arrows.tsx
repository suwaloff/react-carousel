import { Direction } from '../../types';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
  current: number;
  itemsLength: Number;
}

export const Arrows = ({ onClick, current, itemsLength }: ArrowsProps) => {
  return (
    <div className={'Arrows'}>
      {current != 0 && (
        <button className={'left-arrow'} onClick={() => onClick(Direction.LEFT)}>
          {'<'}
        </button>
      )}
      {current != itemsLength && (
        <button className={'right-arrow'} onClick={() => onClick(Direction.RIGHT)}>
          {'>'}
        </button>
      )}
    </div>
  );
};
