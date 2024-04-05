import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { Direction, CarouselListItems } from '../types';
import { Arrows } from '../controls/Arrows/Arrows';
import { ItemsList } from '../ItemsList/ItemList';
import { classNames } from '../helpers/classNames';
import { Dots } from '../controls/Dots/Dots';
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
  const { autoplay, autoplaySpeed, hight, width, items, className } = props;
  const [current, setCurrent] = useState(0);
  const itemsLength = items.length - 1;

  const styles: CSSProperties = {
    width: width,
    height: hight,
  };

  const nextItem = useCallback(
    (direction?: Direction) => {
      if (direction === Direction.RIGHT) {
        setCurrent(current >= itemsLength ? 0 : current + 1);
      } else {
        setCurrent(current > 0 ? current - 1 : itemsLength);
      }
    },
    [current, itemsLength]
  );

  const getCurrentItem = (position?: number) => {
    setCurrent(position);
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
      <Dots onClick={getCurrentItem} quantity={itemsLength} current={current} />
      <ItemsList items={items} current={current} />
    </div>
  );
};

Carousel.defaultProps = {
  autoplaySpeed: 4000,
};
