import { Direction } from '../../types';
import './Arrows.css';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
}

export const Arrows = ({ onClick }: ArrowsProps) => {
  return (
    <div className={'Arrows'}>
      <button className={'arrow'} onClick={() => onClick(Direction.LEFT)}>
        {'<'}
      </button>
      <button className={'arrow'} onClick={() => onClick(Direction.RIGHT)}>
        {'>'}
      </button>
    </div>
  );
};
