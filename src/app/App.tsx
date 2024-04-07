import { CarouselListItems } from '@/carousel/ui/types';
import { Carousel } from '@/carousel';
import cls from '@/app/styles/index.module.scss';
import { CarouselTheme } from '@/carousel/ui/Carousel/Carousel';

export const App = () => {
  const data: CarouselListItems = [
    {
      img: {
        src: 'https://images.pexels.com/photos/10520684/pexels-photo-10520684.jpeg',
        alt: 'cute kitten',
      },
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/10818087/pexels-photo-10818087.jpeg',
        alt: 'cute kitten',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/7420410/pexels-photo-7420410.png',
        alt: 'cute kitten',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/12756386/pexels-photo-12756386.jpeg',
        alt: 'cute kitten',
      },
      text: 'Cute Kitten',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/9734834/pexels-photo-9734834.jpeg',
        alt: 'cute kitten',
      },
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
  ];

  return (
    <div className={cls.App}>
      <Carousel items={data} className={cls.carousel} theme={CarouselTheme.SHOW_NEIGHBORS} />
    </div>
  );
};
