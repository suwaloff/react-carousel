import { classNames } from '../../helpers/classNames';
import cls from './Dots.module.scss';

interface DotsProps {
  className?: string;
  onClick: (position?: number) => void;
  quantity: number;
  current: number;
}

export const Dots = ({ className, quantity, onClick, current }: DotsProps) => {
  const dots = new Array(quantity + 1).fill(0);

  return (
    <div className={cls.Dots}>
      {dots.map((value, index) => (
        <button
          className={classNames(cls.dot, { [cls.checked]: current === index }, [className])}
          onClick={() => onClick(index)}
          key={index}
        ></button>
      ))}
    </div>
  );
};
