import { classNames } from '../../helpers/classNames';
import './Dots.css';

interface DotsProps {
  className?: string;
  onClick: (position?: number) => void;
  quantity: number;
  current: number;
}

export const Dots = ({ className, quantity, onClick, current }: DotsProps) => {
  const dots = new Array(quantity + 1).fill(0);

  return (
    <div className={'Dots'}>
      {dots.map((value, index) => (
        <button
          className={classNames('dot', { ['checked']: current === index }, [className])}
          onClick={() => onClick(index)}
          key={index}
        ></button>
      ))}
    </div>
  );
};
