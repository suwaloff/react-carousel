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

export interface CarouselProps {
  visibleItemCount?: number;
  speed?: number;
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
  const {
    autoplay,
    autoplaySpeed,
    hight,
    width,
    items,
    className,
    showArrows,
    showDots,
    theme,
    speed,
    visibleItemCount,
  } = props;
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
        setCurrent(current + (visibleItemCount - 1) >= itemsLength ? 0 : current + 1);
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
      {showArrows && (
        <Arrows
          onClick={nextItem}
          current={current}
          itemsLength={itemsLength}
          visibleItemCount={visibleItemCount}
        />
      )}
      {showDots && (
        <Dots
          onClick={getCurrentItem}
          quantity={items.length - visibleItemCount}
          current={current}
        />
      )}
      <ItemsList
        items={items}
        current={current}
        speed={speed}
        visibleItemCount={visibleItemCount}
      />
    </div>
  );
};

Carousel.defaultProps = {
  autoplaySpeed: 4000,
  showDots: true,
  showArrows: true,
  speed: 500,
  visibleItemCount: 1,
};
