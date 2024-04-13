import { CarouselProps } from '@/carousel/ui/Carousel/Carousel';
import { Carousel } from '@/carousel';
import cls from '@/app/styles/index.module.scss';

export const App = () => {
  const data = [
    <div className={cls.example}>1</div>,
    <div className={cls.example}>2</div>,
    <div className={cls.example}>3</div>,
    <div className={cls.example}>4</div>,
    <div className={cls.example}>5</div>,
  ];

  const props: CarouselProps = {
    className: cls.carousel,
    items: data,
    speed: 500,
    showDots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    visibleItemCount: 2,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
