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

## Basic Usage

```js
import { Carousel } from 'react-carousel-ts';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  return (
    <div className="carousel-container">
      <Carousel items={data} />
    </div>
  );
};
```

## Customizing Arrows and Dots

You can control their visibility, position, size, and color to match the design of your application.

```js
import { Carousel, CarouselProps, ArrowPosition, DotsTheme } from 'react-carousel-ts';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  const props: CarouselProps = {
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

  return (
    <div className="carousel-container">
      <Carousel items={data} {...props} />
    </div>
  );
};
```

## Transition Effects

If moveEffect is not specified, a simple x-axis rotation is used. This can be changed using the moveEffect prop
Currently, MoveEffect has three values: PERPETUAL_AD_SCROLL(Continuous scrolling effect), FADE(fade in and out), SCALE(scale up and down)

```js
import { Carousel, CarouselProps, MoveEffect } from 'react-carousel-ts';

export const MyComponent = () => {
  const data = [
    <div className="example">1</div>,
    <div className="example">2</div>,
    <div className="example">3</div>,
  ];

  return (
    <div className="carousel-container">
      <Carousel items={data} moveEffect={MoveEffect.SCALE} />
    </div>
  );
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
