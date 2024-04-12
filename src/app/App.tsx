import { Carousel } from '@/carousel';
import { CarouselTheme } from '@/carousel/ui/Carousel/Carousel';
import cls from '@/app/styles/index.module.scss';

export const App = () => {
  const data = [
    <div style={{ background: 'green', height: '100%', width: '100%' }}></div>,
    <div style={{ background: 'red', height: '100%', width: '100%' }}></div>,
    <div style={{ background: 'blue', height: '100%', width: '100%' }}></div>,
  ];

  return (
    <div className={cls.App}>
      <Carousel items={data} className={cls.carousel} theme={CarouselTheme.SHOW_NEIGHBORS} />
    </div>
  );
};
