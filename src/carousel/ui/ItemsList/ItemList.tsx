import { CSSProperties } from 'react';
import { CarouselItem } from '../types';
import { Item } from '../Item/Item';
import cls from './ItemList.module.scss';

interface ItemsListProps {
  className?: string;
  items?: Array<CarouselItem>;
  current?: number;
}

export const ItemsList = ({ items, current }: ItemsListProps) => {
  const style: CSSProperties = {
    transform: `translateX(-${current * 100}%)`,
  };

  return (
    <div className={cls.ItemsList} style={style}>
      {items.map((item) => (
        <Item img={item.img} text={item.text} key={item.img.src} />
      ))}
    </div>
  );
};
