import { Carousel } from '@/carousel';
import cat from '@/assets/cat.jpg';
import cat2 from '@/assets/cat2.jpg';
import cat3 from '@/assets/cat3.jpg';

export const App = () => {
  const data = [
    { img: cat, text: 'Это кот в шакальном качестве' },
    { img: cat2, text: 'Еще один кот в шакальном качестве' },
    { img: cat3, text: 'Ну и последний кот в шакальном качестве' },
  ];

  return (
    <div>
      <Carousel items={data} />
    </div>
  );
};
