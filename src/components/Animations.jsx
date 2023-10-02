export const letterTransition = {
    initial: {
        x: "-100%",
    },
    animate: {
        x: 0,
        transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
    exit: {
        x: "100%",
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

export const letterDelay = {
    animate: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
