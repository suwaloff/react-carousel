import { CSSProperties, useEffect, useState } from 'react';
import { CarouselItem, Direction } from './types';
import { Arrows } from './controls/arrows/Arrows';
import { ItemList } from './itemList/ItemList';
import cls from './Carousel.module.scss';

interface CarouselProps {
  autoplay?: boolean;
  autoplaySpeed?: number;
  width?: string | number;
  hight?: string | number;
  items?: Array<CarouselItem>;
}

export const Carousel = (props: CarouselProps) => {
  const { autoplay, autoplaySpeed = 4000, hight, width, items } = props;
  const [current, setCurrent] = useState(0);

  const styles: CSSProperties = {
    width: width,
    height: hight,
  };

  const nextItem = (direction?: Direction) => {
    if (direction === Direction.RIGHT) {
      setCurrent(current >= items.length - 1 ? 0 : current + 1);
    } else {
      setCurrent(current > 0 ? current - 1 : items.length - 1);
    }
  };

  useEffect(() => {
    if (!autoplay) {
      return;
    }
    const interval = setInterval(() => nextItem(Direction.RIGHT), autoplaySpeed);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className={cls.Carousel} style={styles}>
      <Arrows onClick={nextItem} />
      <ItemList items={items} current={current} />
    </div>
  );
};
