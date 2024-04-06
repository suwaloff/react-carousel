import { CarouselListItems } from '@/carousel/ui/types';
import { Carousel } from '@/carousel';
import cls from '@/app/styles/index.module.scss';

export const App = () => {
  const data: CarouselListItems = [
    {
      img: {
        src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        alt: 'cute kitten',
      },
      text: 'Cute Kitten',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        alt: 'cute kitten',
      },
      text: 'Cute Kitten',
    },
    {
      img: {
        src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        alt: 'cute kitten',
      },
      text: 'Cute Kitten',
    },
  ];

  return (
    <div className={cls.App}>
      <Carousel items={data} className={cls.carousel} />
    </div>
  );
};
