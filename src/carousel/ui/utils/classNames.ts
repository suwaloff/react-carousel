/**
 * Type for class modifiers. Each key is a class name to be included if its value is true.
 */

export type Mods = Record<string, boolean | string | undefined>;

/**
 * Generates a string of class names for a component.
 *
 * @param {string} cls - Base class name.
 * @param {Mods} mods - Classes to add if their value is true.
 * @param {Array<string | undefined>} additional - Additional class names.
 * @returns {string} A string of class names.
 */

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined>
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
