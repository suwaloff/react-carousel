import { CSSProperties } from 'react';
import { Direction, MoveEffect } from '../types/index';

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
  slideCount?: number,
  direction?: Direction
): CSSProperties => {
  switch (moveEffect) {
    case MoveEffect.PERPETUAL_AD_SCROLL:
      if (
        (position < 0 && direction === Direction.LEFT) ||
        (position === (slideCount - 2) * 100 && direction === Direction.RIGHT)
      ) {
        return {
          transform: `translateX(${position}%)`,
          transition: 'none',
          opacity: 0.6,
        };
      }
      return {
        // opacity: position < (slideCount - 2) * 100 ? 1 : 0,
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
      if (
        (position < 0 && direction === Direction.LEFT) ||
        (position === (slideCount - 2) * 100 && direction === Direction.RIGHT)
      ) {
        return {
          transform: `translateX(${position}%)`,
          transition: 'none',
          opacity: 0.6,
        };
      }

      return {
        transform: `translateX(${position}%)`,
        transition: `transform ${speed}ms ease-in-out, opacity ${speed}ms ease-in-out`,
      };
  }
};
