import { CSSProperties, ReactNode } from 'react';
import { classNames } from '../utils/classNames';
import { getMoveEffect } from './../utils/getMoveEffect';
import { Direction, MoveEffect } from '../types/index';
import './Item.css';

interface ItemProps {
  children?: ReactNode;
  moveEffect?: MoveEffect;
  position: number;
  speed?: number;
  visibleItemCount?: number;
  slideCount?: number;
  className?: string;
  direction?: Direction;
}

export const Item = (props: ItemProps) => {
  const {
    position,
    children,
    moveEffect,
    speed,
    visibleItemCount,
    className,
    slideCount,
    direction,
  } = props;

  const animationStyles: CSSProperties = getMoveEffect(
    moveEffect,
    speed,
    position,
    slideCount,
    direction
  );

  const itemStyle: CSSProperties = {
    ...animationStyles,
    width: `calc(100% / ${visibleItemCount})`,
  };

  return (
    <div className={classNames('item', {}, [className])} style={itemStyle}>
      {children}
    </div>
  );
};
