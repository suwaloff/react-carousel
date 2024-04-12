import { CSSProperties, useCallback, useEffect, useState, ReactNode } from 'react';
import { Direction } from '../types';
import { Arrows } from '../controls/Arrows/Arrows';
import { ItemsList } from '../ItemsList/ItemList';
import { Mods, classNames } from '../helpers/classNames';
import { Dots } from '../controls/Dots/Dots';
import './Carousel.css';

export enum CarouselTheme {
  SHOW_NEIGHBORS = 'showNeighbors',
  NEIGHBORS_3D = 'neighbors-3d',
}

interface CarouselProps {
  showDots?: boolean;
  showArrows?: boolean;
  theme?: CarouselTheme;
  className?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  width?: string | number;
  hight?: string | number;
  items?: ReactNode[];
}

export const Carousel = (props: CarouselProps) => {
  const { autoplay, autoplaySpeed, hight, width, items, className, showArrows, showDots, theme } =
    props;
  const [current, setCurrent] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

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

  const handleTouchStart = (e?: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e?: React.TouchEvent) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      nextItem(Direction.RIGHT);
      setTouchPosition(currentPosition);
    }

    if (direction < -10) {
      nextItem(Direction.LEFT);
      setTouchPosition(currentPosition);
    }

    setTouchPosition(null);
  };

  const mods: Mods = {
    [CarouselTheme.SHOW_NEIGHBORS]: theme === CarouselTheme.SHOW_NEIGHBORS,
    [CarouselTheme.NEIGHBORS_3D]: theme === CarouselTheme.NEIGHBORS_3D,
  };

  return (
    <div
      className={classNames('Carousel', mods, [className])}
      style={styles}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {showArrows && <Arrows onClick={nextItem} current={current} itemsLength={itemsLength} />}
      {showDots && <Dots onClick={getCurrentItem} quantity={itemsLength} current={current} />}
      <ItemsList items={items} current={current} />
    </div>
  );
};

Carousel.defaultProps = {
  autoplaySpeed: 4000,
  showDots: true,
  showArrows: true,
};
