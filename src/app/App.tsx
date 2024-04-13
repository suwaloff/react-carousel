import { Carousel, CarouselProps } from '@/carousel';
import cls from '@/app/styles/index.module.scss';

export const App = () => {
  const data = [
    <div className={cls.example}>1</div>,
    <div className={cls.example}>2</div>,
    <div className={cls.example}>3</div>,
  ];

  const props: CarouselProps = {
    className: cls.carousel,
    items: data,
    speed: 500,
    showDots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    visibleItemCount: 1,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
