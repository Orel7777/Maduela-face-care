export const SlidUp = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.42, 0, 0.58, 1],
        delay: delay,
      },
    },
  } as any;
};

export const SlidUpLeft = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      },
    },
  } as any;
};

export const SlidUpRight = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        delay: delay,
      },
    },
  } as any;
};
