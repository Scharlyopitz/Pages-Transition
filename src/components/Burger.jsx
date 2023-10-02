import { motion } from "framer-motion";

export default function Burger({ setBurgerActive, burgerActive }) {
    return (
        <>
            <motion.div
                onClick={() => setBurgerActive(!burgerActive)}
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    transition: {
                        duration: 0.5,
                        ease: [0.25, 1, 0.5, 1],
                        delay: 0.5,
                    },
                }}
                className="burger-container"
            >
                <motion.div
                    initial={{ scaleX: 0, x: "-50%", y: "-50%" }}
                    animate={{
                        scaleX: 1,
                        transition: {
                            duration: 1,
                            ease: [0.25, 1, 0.5, 1],
                            delay: 1,
                        },
                    }}
                    className={`burger-logo ${
                        burgerActive ? "active-burger" : ""
                    }`}
                ></motion.div>
            </motion.div>
        </>
    );
}
