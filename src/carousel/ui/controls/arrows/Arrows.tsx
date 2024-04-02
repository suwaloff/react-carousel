import { Direction } from '../../types';
import cls from './Arrows.module.scss';

interface ArrowsProps {
  onClick: (direction: Direction) => void;
}

export const Arrows = ({ onClick }: ArrowsProps) => {
  return (
    <div className={cls.Arrows}>
      <button className={cls.arrow} onClick={() => onClick(Direction.LEFT)}>
        {'<'}
      </button>
      <button className={cls.arrow} onClick={() => onClick(Direction.RIGHT)}>
        {'>'}
      </button>
    </div>
  );
};
