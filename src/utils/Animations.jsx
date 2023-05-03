export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};
export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const pageContactAnimation = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      when: "delayChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const titleBioAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const postAnim = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const postBioAnim = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const frameTransition = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};
export const frameContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

// animation for each project
export const slideReveal = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 1,
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
};
export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 1,
    },
  },
};
