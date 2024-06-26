import { Direction, MoveEffect } from '../types/index';
import { ReactNode } from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

interface ItemsListProps {
  items: ReactNode[];
  current: number;
  speed?: number;
  moveEffect?: MoveEffect;
  visibleItemCount?: number;
  direction?: Direction;
}

export const ItemsList = (props: ItemsListProps) => {
  const { visibleItemCount, speed, moveEffect, items, current, direction } = props;

  return (
    <div className="carousel-items-list">
      {items.map((item, index) => (
        <Item
          children={item}
          key={index}
          speed={speed}
          visibleItemCount={visibleItemCount}
          position={(((index - current + items.length) % items.length) - 1) * 100}
          moveEffect={moveEffect}
          direction={direction}
          slideCount={items.length}
        />
      ))}
    </div>
  );
};
