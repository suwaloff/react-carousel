import { CSSProperties, ReactNode } from 'react';
import { classNames } from '../helpers/classNames';
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
  const style: CSSProperties = {
    transform: `translateX(-${(current * 100) / visibleItemCount}%)`,
    transition: `transform ${speed}ms ease`,
  };

  return (
    <div className={classNames('ItemsList', {}, [])} style={style}>
      {items.map((item, index) => (
        <Item
          children={item}
          key={index}
          active={index === current}
          speed={speed}
          visibleItemCount={visibleItemCount}
        />
      ))}
    </div>
  );
};
