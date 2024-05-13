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
        opacity: position < 100 ? 1 : 0,
        transform: `translateX(${position}%)`,
        transition: `transform ${speed}ms linear`,
      };
    case MoveEffect.FADE:
      return {
        opacity: position === 0 ? 1 : 0,
        transition: `opacity ${speed}ms ease-in-out`,
      };
    case MoveEffect.SCALE:
      return {
        opacity: position === 0 ? 1 : 0,
        transform: `scale(${position === 0 ? 1 : 0})`,
        transition: `transform ${speed}ms ease-in-out, opacity ${speed * 2}ms ease-in-out`,
      };

    default:
      return {
        opacity: position === 0 ? 1 : 0,
        transform: `translateX(${position}%)`,
        transition: `transform ${speed}ms ease-in-out, opacity ${speed}ms ease-in-out `,
      };
  }
};
