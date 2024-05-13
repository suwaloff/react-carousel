import { ArrowPosition, Direction, DotsTheme, MoveEffect } from '../types';
import { useEffect, useState, ReactNode, useRef } from 'react';
import { CarouselControlColor } from '../controls/types/index';
import { classNames } from '../utils/classNames';
import { ItemsList } from '../ItemsList/ItemList';
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
  arrowPosition?: ArrowPosition;
  className?: string;
  visibleItemCount?: number;
  speed?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

export const Carousel = (props: CarouselProps) => {
  const {
    autoplay,
    autoplaySpeed,
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
    arrowPosition,
  } = props;
  const [current, setCurrent] = useState(-1);
  const currentRef = useRef(-1);

  const getNextItem = (direction?: Direction) => {
    if (direction === Direction.RIGHT) {
      currentRef.current = currentRef.current < items.length - 1 ? currentRef.current + 1 : 0;
    } else {
      currentRef.current = currentRef.current >= 0 ? currentRef.current - 1 : items.length - 2;
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
    let accumulatedTime = 0;

    const frame = () => {
      const now = Date.now();
      let deltaTime = now - lastTime;
      lastTime = now;
      deltaTime = Math.min(deltaTime, 500);
      accumulatedTime += deltaTime;

      if (accumulatedTime >= autoplaySpeed) {
        getNextItem(Direction.RIGHT);
        accumulatedTime -= autoplaySpeed;
      }

      requestAnimationFrame(frame);
    };

    const frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, [autoplay]);

  return (
    <div className={classNames('Carousel', {}, [className])}>
      {showArrows && !autoplay && (
        <Arrows
          onClick={getNextItem}
          current={current}
          itemsLength={items.length - 1}
          visibleItemCount={visibleItemCount}
          arrowSize={arrowSize}
          arrowColor={arrowColor}
          infinity={infinity}
          arrowPosition={arrowPosition}
        />
      )}
      {showDots && !autoplay && (
        <Dots
          onClick={getCurrentItem}
          quantity={items.length - visibleItemCount}
          current={current}
          dotsColor={dotsColor}
          dotsTheme={dotsTheme}
        />
      )}
      <ItemsList
        items={infinity ? items : items}
        current={current}
        speed={speed}
        visibleItemCount={visibleItemCount}
        moveEffect={moveEffect}
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
  arrowSize: 7,
  arrowColor: 'white',
};
