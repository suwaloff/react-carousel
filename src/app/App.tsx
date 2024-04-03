import { CarouselListItems } from '@/carousel/ui/types';
import { Carousel } from '@/carousel';
import cat from '@/assets/cat.jpg';
import cat2 from '@/assets/cat2.jpg';
import cat3 from '@/assets/cat3.jpg';

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
  ];

  return (
    <div>
      <Carousel items={data} />
    </div>
  );
};
