/** Joins class names, skipping falsy values. Small enough not to warrant clsx. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
