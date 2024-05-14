import { ArrowPosition, MoveEffect } from '@/carousel/ui/types';
import { Carousel, CarouselProps } from '@/carousel';
import cls from '@/app/styles/index.module.scss';

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
    //autoplay: true,
    autoplaySpeed: 1000,
    visibleItemCount: 2,
    infinity: true,
    arrowPosition: ArrowPosition.BORDER,
    moveEffect: MoveEffect.PERPETUAL_AD_SCROLL,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
