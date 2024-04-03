import { CSSProperties, useEffect, useState } from 'react';
import { Direction, CarouselListItems } from './types';
import { Arrows } from './controls/Arrows/Arrows';
import { ItemsList } from './ItemsList/ItemList';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Carousel.module.scss';

interface CarouselProps {
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  width?: string | number;
  hight?: string | number;
  items?: CarouselListItems;
}

export const Carousel = (props: CarouselProps) => {
  const { autoplay, autoplaySpeed = 4000, hight, width, items, className } = props;

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
    <div className={classNames(cls.Carousel, {}, [className])} style={styles}>
      <Arrows onClick={nextItem} />
      <ItemsList items={items} current={current} />
    </div>
  );
};
