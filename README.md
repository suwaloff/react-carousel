# react-carousel-ts
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-carousel-ts/0.1.1)
<a href="https://github.com/suwaloff/react-carousel/blob/main/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-red.svg" target="_blank" />
</a>


# Ultra-light carousel component for React

[![SVO0w.gif](https://s12.gifyu.com/images/SVO0w.gif)](https://gifyu.com/image/SVO0w)
## Installation

Install the package using npm:

```bash
npm i react-carousel-ts
```
## Usage

```js
import { Carousel, CarouselListItems } from 'react-carousel-ts';

export const App = () => {

  const data: CarouselListItems = [
    {
      img: { src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', alt: 'cute kitten' },
      text: 'Cute Kitten',
    },
    {
      img: { src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', alt: 'cute kitten' },
      text: 'Cute Kitten',
    },
    {
      img: { src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', alt: 'cute kitten' },
      text: 'Cute Kitten',
    },
  ];

  return (
    <div>
      <Carousel items={data}/>
    </div>
  );
};
```
## Props

| Name          | Type              | Default | Description |
| :------------ | :---------------- | :------ | :---------- |
| showDots    | `boolean`          | `true`    | Shows navigation dots. |
| showArrows     | `boolean`          | `true`    |  Shows navigation arrows.|
| className     | `string`          | `''`    | CSS class for styling. |
| autoplay      | `boolean`         | `false` | Enables automatic cycling. |
| autoplaySpeed | `number`          | `4000`  | Speed of autoplay in ms. |
| width         | `string \| number`| `'600px'`| Width of the carousel. |
| height        | `string \| number`| `'400px'`| Height of the carousel. |
| items         | `CarouselListItems`| `[]`   | Items to display. |
