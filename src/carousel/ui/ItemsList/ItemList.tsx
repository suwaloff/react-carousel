import { CSSProperties, ReactNode } from 'react';
import { classNames } from '../helpers/classNames';
import { Item } from '../Item/Item';
import './ItemList.css';

interface ItemsListProps {
  className?: string;
  items?: ReactNode[];
  current?: number;
}

export const ItemsList = ({ items, current }: ItemsListProps) => {
  const style: CSSProperties = {
    transform: `translateX(-${current * 100}%)`,
  };

  return (
    <div className={classNames('ItemsList', {}, [])} style={style}>
      {items.map((item, index) => (
        <Item children={item} key={index} active={index === current} />
      ))}
    </div>
  );
};
