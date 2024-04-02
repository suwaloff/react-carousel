import { CarouselItem } from '../types';
import { Item } from '../item/Item';
import cls from './ItemList.module.scss';

interface ListItemProps {
  className?: string;
  items?: Array<CarouselItem>;
  current?: number;
}

export const ItemList = ({ items, current }: ListItemProps) => {
  return (
    <div className={cls.ItemList} style={{ transform: `translateX(-${current * 100}%)` }}>
      {items.map((item) => (
        <Item img={item.img} text={item.text} key={item.img} />
      ))}
    </div>
  );
};
