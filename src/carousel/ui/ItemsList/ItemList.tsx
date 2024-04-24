import { ReactNode } from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

interface ItemsListProps {
  className?: string;
  items?: ReactNode[];
  current?: number;
  speed?: number;
  visibleItemCount?: number;
}

export const ItemsList = ({ items, current, speed, visibleItemCount }: ItemsListProps) => {
  return (
    <div className="carousel-items-list">
      {items.map((item, index) => (
        <Item
          children={item}
          key={index}
          speed={speed}
          visibleItemCount={visibleItemCount}
          position={(((index + current) % items.length) - 1) * 100}
        />
      ))}
    </div>
  );
};
