import { CarouselListItems } from '@/carousel/ui/types';
import { Carousel } from '@/carousel';
import cat from '@/assets/cat.jpg';
import cat2 from '@/assets/cat2.jpg';
import cat3 from '@/assets/cat3.jpg';
import cls from '@/app/styles/index.module.scss';

export const App = () => {
  const data: CarouselListItems = [
    {
      img: { src: cat, alt: 'asd' },
      text: 'Это кот в шакальном качестве',
    },
    {
      img: { src: cat2, alt: 'asd' },
      text: 'Еще один кот в шакальном качестве',
    },
    {
      img: { src: cat3, alt: 'asd' },
      text: 'Ну и последний кот в шакальном качестве',
    },
    {
      img: {
        src: 'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
        alt: 'asd',
      },
      text: 'Ну и последний кот в шакальном качестве',
    },
  ];

  return (
    <div className={cls.App}>
      <Carousel items={data} width={800} hight={600} />
    </div>
  );
};
