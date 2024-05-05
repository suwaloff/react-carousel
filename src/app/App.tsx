import { Carousel, CarouselProps } from '@/carousel';
import cls from '@/app/styles/index.module.scss';
import { ArrowPosition, MoveEffect } from '@/carousel/ui/types';

export const App = () => {
  const data = [
    <div className={cls.example} style={{ backgroundColor: 'GrayText' }}>
      1
    </div>,
    <div className={cls.example} style={{ backgroundColor: 'pink' }}>
      2
    </div>,
    <div className={cls.example} style={{ backgroundColor: 'blueviolet' }}>
      3
    </div>,
    <div className={cls.example} style={{ backgroundColor: 'gold' }}>
      4
    </div>,
  ];

  const props: CarouselProps = {
    className: cls.carousel,
    items: data,
    speed: 1000,
    // showDots: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    visibleItemCount: 1,
    // infinity: true,
    arrowPosition: ArrowPosition.BORDER,
    // moveEffect: MoveEffect.INFINITY,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
