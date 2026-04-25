export const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25, ease: 'easeIn' } },
};

export const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const cardItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const slideInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

export const slideInRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
};

export const viewportOnce = { once: true, margin: '-80px' };
