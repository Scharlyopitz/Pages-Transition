import { motion } from "framer-motion";
import { letterTransition, letterDelay } from "../components/Animations";

export default function Home() {
    const homeletters = "Home".split("");

    return (
        <>
            <motion.section>
                <motion.div
                    className="container"
                    variants={letterDelay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {homeletters.map((homeletter, index) => {
                        return (
                            <div key={index}>
                                <motion.h1 variants={letterTransition}>
                                    {homeletter}
                                </motion.h1>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.section>
        </>
    );
}
