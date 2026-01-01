import type { Variants } from "motion/react";

export const SlidUp = (delay: number = 0): Variants => {
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
        delay,
      },
    },
  };
};

export const SlidUpLeft = (delay: number = 0): Variants => {
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
        delay,
      },
    },
  };
};

export const SlidUpRight = (delay: number = 0): Variants => {
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
        delay,
      },
    },
  };
};

// Fade in from bottom with smooth easing
export const FadeInUp = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Fade in from left (for RTL - appears from right visually)
export const FadeInFromLeft = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Fade in from right (for RTL - appears from left visually)
export const FadeInFromRight = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Scale up with fade
export const ScaleUp = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Stagger container for children animations
export const StaggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0): Variants => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Simple fade in
export const FadeIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

// Blur fade in (premium effect)
export const BlurFadeIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};

// Card hover lift effect
export const CardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Rotate in effect
export const RotateIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      opacity: 0,
      rotate: -10,
      y: 30,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};
