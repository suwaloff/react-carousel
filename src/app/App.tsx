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
    speed: 500,
    // showDots: false,
    //autoplay: true,
    autoplaySpeed: 1500,
    visibleItemCount: 1,
    infinity: true,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
