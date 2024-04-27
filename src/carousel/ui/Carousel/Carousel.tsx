import { CSSProperties, useEffect, useState, ReactNode, useRef } from 'react';
import { classNames } from '../utils/classNames';
import { CarouselControlColor } from '../controls/types/index';
import { ItemsList } from '../ItemsList/ItemList';
import { Direction, DotsTheme, MoveEffect } from '../types';
import { Arrows } from '../controls/Arrows/Arrows';
import { Dots } from '../controls/Dots/Dots';
import './Carousel.css';

export interface CarouselProps {
  items: ReactNode[];
  moveEffect?: MoveEffect;
  infinity?: boolean;
  showDots?: boolean;
  dotsColor?: CarouselControlColor;
  dotsTheme?: DotsTheme;
  showArrows?: boolean;
  arrowSize?: number;
  arrowColor?: CarouselControlColor;
  className?: string;
  visibleItemCount?: number;
  speed?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  width?: string | number;
  hight?: string | number;
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
    speed,
    visibleItemCount,
    arrowSize,
    arrowColor,
    dotsColor,
    dotsTheme,
    infinity,
    moveEffect,
  } = props;
  const [current, setCurrent] = useState(-1);
  const [touchPosition, setTouchPosition] = useState(null);
  const clonedItems: ReactNode[] = [...items];

  const styles: CSSProperties = {
    width: width,
    height: hight,
  };

  const currentRef = useRef(-1);

  const nextItem = (direction?: Direction) => {
    if (direction === Direction.RIGHT) {
      currentRef.current = currentRef.current < clonedItems.length - 1 ? currentRef.current + 1 : 0;
    } else {
      currentRef.current =
        currentRef.current >= 0 ? currentRef.current - 1 : clonedItems.length - 1;
    }
    setCurrent(currentRef.current);
  };

  const getCurrentItem = (position?: number) => {
    setCurrent(position);
  };

  useEffect(() => {
    if (!autoplay) {
      return;
    }
    let lastTime = Date.now();
    let accumulatedTime = 0; // Накопленное время

    const frame = () => {
      const now = Date.now();
      let deltaTime = now - lastTime;
      lastTime = now;
      deltaTime = Math.min(deltaTime, 500);
      accumulatedTime += deltaTime;

      if (accumulatedTime >= autoplaySpeed) {
        nextItem(Direction.RIGHT);
        accumulatedTime -= autoplaySpeed; // Сброс накопленного времени
      }

      requestAnimationFrame(frame);
    };

    const frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, [autoplay]);

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

  return (
    <div
      className={classNames('Carousel', {}, [className])}
      style={styles}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {showArrows && (
        <Arrows
          onClick={nextItem}
          current={current}
          itemsLength={clonedItems.length - 1}
          visibleItemCount={visibleItemCount}
          arrowSize={arrowSize}
          arrowColor={arrowColor}
          infinity={infinity}
        />
      )}
      {showDots && (
        <Dots
          onClick={getCurrentItem}
          quantity={items.length - visibleItemCount}
          current={current}
          dotsColor={dotsColor}
          dotsTheme={dotsTheme}
        />
      )}
      <ItemsList
        items={infinity ? clonedItems : items}
        current={current}
        speed={speed}
        visibleItemCount={visibleItemCount}
        moveEffect={moveEffect}
      />
    </div>
  );
};

Carousel.defaultProps = {
  //autoplaySpeed: 4000,
  showDots: true,
  showArrows: true,
  speed: 500,
  visibleItemCount: 1,
  arrowSize: 6,
  arrowColor: 'white',
};
