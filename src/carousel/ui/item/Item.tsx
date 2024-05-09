import { CSSProperties, ReactNode } from 'react';
import { Mods, classNames } from '../utils/classNames';
import { getMoveEffect } from './../utils/getMoveEffect';
import { MoveEffect } from '../types/index';
import './Item.css';

interface ItemProps {
  children?: ReactNode;
  moveEffect?: MoveEffect;
  position: number;
  speed?: number;
  visibleItemCount?: number;
  slideCount?: number;
  className?: string;
}

export const Item = (props: ItemProps) => {
  const { position, children, moveEffect, speed, visibleItemCount, className, slideCount } = props;

  const animationStyles: CSSProperties = getMoveEffect(moveEffect, speed, position, slideCount);

  const itemStyle: CSSProperties = {
    ...animationStyles,
    width: `calc(100% / ${visibleItemCount})`,
  };

  const visibilityModifier: Mods = {
    hidden: position != 0,
  };

  return (
    <div className={classNames('item', visibilityModifier, [className])} style={itemStyle}>
      {children}
    </div>
  );
};
