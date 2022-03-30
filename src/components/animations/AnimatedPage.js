const easing=[.6, -0.05, 0.01, 0.99]

export const animations = {
    hidden: { 
        opacity: 0, 
    },
    enter: { opacity: 1,
        transition: {
            staggerChildren: 0.2,
            },
    },
   
}

export const item = {
    hidden: { 
        opacity: 0, 
        y: 60,
        transition: { duration: 0.6, ease: easing }
    },
    enter: { opacity: 1, y: 0, 
        transition: {
            type: "spring",
            stiffness: 100,
            duration: .6, 
            ease: easing, 
            } 
        },
    exit: { opactiy: 0, y: 200}
};
