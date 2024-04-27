import { CSSProperties } from 'react';
import { MoveEffect } from '../types/index';

/**
 * The `getMoveEffect` function generates CSS properties for carousel item animation.
 *
 * @param {MoveEffect} moveEffect - The movement effect for the animation.
 * @param {number} speed - The speed of the animation.
 * @param {number} position - The current position of the item.
 * @param {number} slideCount - The total number of slides
 * @returns {CSSProperties} A CSSProperties object for the animation.
 */

export const getMoveEffect = (
  moveEffect: MoveEffect,
  speed: number,
  position: number,
  slideCount?: number
): CSSProperties => {
  switch (moveEffect) {
    case MoveEffect.INFINITY:
      return {
        transform: `translateX(${position}%)`,
        transition: `transform ${speed}ms linear, opacity ${500}ms ease-in-out `,
      };
    default:
      return {
        transform: `translateX(${position}%)`,
        transition: `transform ${speed}ms ease-in-out, opacity ${500}ms ease-in-out `,
      };
  }
};
