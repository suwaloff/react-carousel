# React-carousel- [![ts](https://skillicons.dev/icons?i=ts)](https://www.npmjs.com/package/react-carousel-ts?activeTab=readme)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-carousel-ts/0.1.1)
<a href="https://github.com/suwaloff/react-carousel/blob/main/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-red.svg" target="_blank" />
</a>

# Ultra-light carousel component for React

[![Sfsb1.gif](https://s12.gifyu.com/images/Sfsb1.gif)](https://gifyu.com/image/Sfsb1)

## About

This carousel provides infinite scrolling without cloning elements, ensuring efficient memory use and performance.
It leverages requestAnimationFrame for smooth animations, optimizing performance and reducing CPU load.

## Installation

Install the package using npm:

```bash
npm i -D react-carousel-ts
```

## Basic Usage

First, import the `Carousel` component and ensure you include the necessary CSS file for styling:

```js
import { Carousel } from 'react-carousel-ts';
import 'carousel.css';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  return <Carousel items={data} className="carousel" />;
};
```

To ensure the carousel displays correctly, it's important to include CSS styles for sizing, borders, and other visual aspects.

```css
.carousel {
  height: 40vh;
  width: 50vw;
  border: 2px solid white;
  border-radius: 14px;
}
```

> [!IMPORTANT]
>
> - The carousel requires at least three elements to function properly with all transition effects.
> - With only two elements, only the FADE and SCALE transition effects will function correctly.
> - If there is only one or no elements, the carousel will not be displayed.

## Infinity scrolling

To enable the infinite scrolling effect in the Carousel component, simply set the `infinity` property to true.

```js
<Carousel infinity={true} />
```

This will allow the carousel to loop through items endlessly.
[![Sfsdh.gif](https://s12.gifyu.com/images/Sfsdh.gif)](https://gifyu.com/image/Sfsdh)

## Setting the number of visible elements

To control the number of items displayed at once in the Carousel, use the `visibleItemCount` property.

```js
<Carousel visibleItemCount={2} />
```

![Alt text](https://s12.gifyu.com/images/SfsvA.png 'a title')

## Customizing Arrows and Dots

You can control their visibility, position, size, and color to match the design of your application.

```js
import { Carousel, CarouselProps, ArrowPosition, DotsTheme } from 'react-carousel-ts';
import 'carousel.css';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  const props: CarouselProps = {
    className: 'carousel',
    // The size of the arrow in vh/vw units. Default value is 8.
    arrowSize: 8,

    // The color of the arrow. It can be one of the predefined colors or in RGB, RGBA, HEX format.
    arrowColor: 'gray',

    // The position of the arrow. It can be INSIDE, OUTSIDE, or BORDER.
    arrowPosition: ArrowPosition.BORDER,

    // Whether to show dots. Default value is false.
    showDots: true,

    // The theme of the dots. It can be LINE, ROUND, or RECTANGLE.
    dotsTheme: DotsTheme.LINE,

    // The color of the dots. It can be one of the predefined colors or in RGB, RGBA, HEX format.
    dotsColor: 'gray',
  };

  return <Carousel items={data} {...props} />;
};
```

## Transition Effects

If moveEffect is not specified, a simple x-axis rotation is used. This can be changed using the moveEffect prop
Currently, MoveEffect has three values: PERPETUAL_AD_SCROLL(Continuous scrolling effect), FADE(fade in and out), SCALE(scale up and down)

```js
import { Carousel, CarouselProps, MoveEffect } from 'react-carousel-ts';
import 'carousel.css';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  return <Carousel items={data} moveEffect={MoveEffect.SCALE} />;
};
```

## Props

| Name             |          Type          |   Default   | Description                                                                  |
| :--------------- | :--------------------: | :---------: | :--------------------------------------------------------------------------- |
| items            |     `ReactNode[]`      |    `[]`     | Carousel items.                                                              |
| showDots         |       `boolean`        |   `false`   | Shows navigation dots.                                                       |
| showArrows       |       `boolean`        |   `true`    | Shows navigation arrows.                                                     |
| speed            |        `number`        |   `1000`    | Transition speed in ms.                                                      |
| autoplay         |       `boolean`        |   `false`   | Enable automatic cycling.                                                    |
| infinity         |       `boolean`        |   `false`   | Enables infinite cycling of carousel items.                                  |
| autoplaySpeed    |        `number`        |   `4000`    | Autoplay interval (ms).                                                      |
| moveEffect       |      `MoveEffect`      | `undefined` | Slide transition effect. (Possible values: FADE, SCALE, PERPETUAL_AD_SCROLL) |
| visibleItemCount |        `number`        |     `1`     | Visible items count.                                                         |
| arrowPosition    |    `ArrowPosition`     |  `INSIDE`   | Arrow position.                                                              |
| arrowSize        |        `number`        |     `7`     | Size of the navigation arrows.                                               |
| arrowColor       | `CarouselControlColor` |   `white`   | Arrow color. (Possible values: Any valid CSS color value)                    |
| dotsTheme        |      `DotsTheme`       | `RECTANGLE` | Shape of the navigation dots. (Possible values: ROUND, RECTANGLE, LINE)      |
| dotsColor        | `CarouselControlColor` |   `white`   | Dots color. (Possible values: Any valid CSS color value)                     |
| className        |        `string`        |    `''`     | Additional CSS class.                                                        |

## TODO

- [ ] Add support for custom arrows and dots
- [ ] Add support custom transition effects

## Contact Information

- Telegram: @Suwaloff
- Gmail: suwaloff@gmail.com
