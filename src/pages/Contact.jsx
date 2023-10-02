import { motion } from "framer-motion";
import { letterTransition, letterDelay } from "../components/Animations";

export default function Contact() {
    const contactletters = "contact".split("");

    return (
        <>
            <section id="contact">
                <motion.div
                    className="container"
                    variants={letterDelay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {contactletters.map((contactletter, index) => {
                        return (
                            <div key={index}>
                                <motion.h1 variants={letterTransition}>
                                    {contactletter}
                                </motion.h1>
                            </div>
                        );
                    })}
                </motion.div>
            </section>
        </>
    );
}
