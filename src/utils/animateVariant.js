export const variantBouncyY = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", bounce: 0.6, duration: 2.5 },
};
export const variantBouncyX = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { type: "spring", bounce: 0.6, duration: 2.5 },
};
export const variantTitle = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: "-100px",
  },
  transition: {
    duration: 1.5,
  },
};
export const variantImage = {
  animate: {
    opacity: 1,
    y: 0,
  },
  initial: {
    opacity: 0,
    y: 100,
  },
  transition: {
    duration: 1.5,
  },
};
