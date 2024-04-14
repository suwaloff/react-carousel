# React-carousel- [![ts](https://skillicons.dev/icons?i=ts)](https://www.npmjs.com/package/react-carousel-ts?activeTab=readme)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-carousel-ts/0.1.1)
<a href="https://github.com/suwaloff/react-carousel/blob/main/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-red.svg" target="_blank" />
</a>

# Ultra-light carousel component for React

[![SVO0w.gif](https://s12.gifyu.com/images/SVO0w.gif)](https://gifyu.com/image/SVO0w)

## Installation

Install the package using npm:

```bash
npm i -D react-carousel-ts
```

## Usage

```js
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
    visibleItemCount: 2,
  };

  return (
    <div className={cls.App}>
      <Carousel {...props} />
    </div>
  );
};
```

## Props

| Name             | Type                | Default   | Description                |
| :--------------- | :------------------ | :-------- | :------------------------- |
| items            | `CarouselListItems` | `[]`      | Items to display.          |
| className        | `string`            | `''`      | CSS class for styling.     |
| showDots         | `boolean`           | `true`    | Shows navigation dots.     |
| showArrows       | `boolean`           | `true`    | Shows navigation arrows.   |
| speed            | `number`            | `500`     | Transition speed in ms.    |
| autoplay         | `boolean`           | `false`   | Enables automatic cycling. |
| autoplaySpeed    | `number`            | `4000`    | Speed of autoplay in ms.   |
| visibleItemCount | `number`            | `1`       | Number of visible items.   |
| width            | `string \| number`  | `'600px'` | Width of the carousel.     |
| height           | `string \| number`  | `'400px'` | Height of the carousel.    |
