import { motion } from "framer-motion";
import { letterTransition, letterDelay } from "../components/Animations";

import { useState, useEffect } from "react";

export default function About() {
    const aboutletters = "about".split("");

    return (
        <>
            <section id="about">
                <motion.div
                    className="container"
                    variants={letterDelay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {aboutletters.map((aboutletter, index) => {
                        return (
                            <div key={index}>
                                <motion.h1 variants={letterTransition}>
                                    {aboutletter}
                                </motion.h1>
                            </div>
                        );
                    })}
                </motion.div>
            </section>
        </>
    );
}
