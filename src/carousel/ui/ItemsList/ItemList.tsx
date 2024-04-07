import { CSSProperties } from 'react';
import { CarouselItem } from '../types';
import { classNames } from '../helpers/classNames';
import { Item } from '../Item/Item';
import './ItemList.css';

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
    <div className={classNames('ItemsList', {}, [])} style={style}>
      {items.map((item, index) => (
        <Item img={item.img} text={item.text} key={item.img.src} active={index === current} />
      ))}
    </div>
  );
};
