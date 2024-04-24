import { CSSProperties, ReactNode } from 'react';
import { Mods, classNames } from '../helpers/classNames';
import './Item.css';

interface ItemProps {
  children?: ReactNode;
  className?: string;
  speed?: number;
  visibleItemCount?: number;
  position: number;
}

export const Item = ({ className, children, speed, visibleItemCount, position }: ItemProps) => {
  const style: CSSProperties = {
    transform: `translateX(${position}%)`,
    transition: `transform ${speed}ms ease-in-out, opacity ${500}ms ease-in-out `,
    width: `calc(100% / ${visibleItemCount})`,
  };

  const mod: Mods = {
    none: position < 0 || position > 0 + (visibleItemCount - 1) * 100,
  };

  return (
    <div className={classNames('item', mod, [className])} style={style}>
      {children}
    </div>
  );
};
