import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { useState } from "react";

export default function Nav({ base, burgerActive, setBurgerActive }) {
    const Navs = [
        {
            name: "Home",
            to: "",
        },
        {
            name: "About",
            to: "about",
        },
        {
            name: "Contact",
            to: "contact",
        },
    ];

    const [data, setdata] = useState();

    const handleMouseEnter = (e) => {
        setdata(parseInt(e.target.dataset.id));
    };

    const initialPath = `M0 0 Q ${window.innerWidth / 2} 200 ${
        window.innerWidth
    } 0`;

    const animatedPath = `M0 0 Q ${window.innerWidth / 2} 0 ${
        window.innerWidth
    } 0`;

    return (
        <>
            <motion.header
                initial={{ y: "calc(-100% + -100px)" }}
                animate={{
                    y: 0,
                    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
                }}
                exit={{
                    y: "calc(-100% + -100px)",
                    transition: {
                        duration: 0.8,
                        ease: [0.65, 0, 0.35, 1],
                        delay: 0.05,
                    },
                }}
            >
                <div className="text-container">
                    {Navs.map((nav, idx) => (
                        <NavLink
                            onClick={() => setBurgerActive(false)}
                            to={`${base}${nav.to}`}
                            onMouseEnter={(e) => handleMouseEnter(e, idx)}
                            key={idx}
                        >
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.6,
                                        ease: [0.65, 0, 0.35, 1],
                                    },
                                }}
                                exit={{
                                    y: "100%",
                                    transition: {
                                        ease: [0.65, 0, 0.35, 1],
                                    },
                                }}
                            >
                                <motion.p
                                    data-id={idx}
                                    animate={{
                                        y: data === idx ? "-100%" : 0,
                                        transition: {
                                            ease: [0.65, 0, 0.35, 1],
                                            duration: 0.5,
                                        },
                                    }}
                                >
                                    {nav.name}
                                </motion.p>
                                <motion.p
                                    data-id={idx}
                                    animate={{
                                        y: data === idx ? "-100%" : 0,
                                        transition: {
                                            ease: [0.65, 0, 0.35, 1],
                                            duration: 0.5,
                                        },
                                    }}
                                >
                                    {nav.name}
                                </motion.p>
                            </motion.div>
                        </NavLink>
                    ))}
                </div>

                <svg>
                    <motion.path
                        initial={{ d: initialPath }}
                        animate={{
                            d: animatedPath,
                            transition: {
                                duration: 1.2,
                                ease: [0.65, 0, 0.35, 1],
                            },
                        }}
                        exit={{
                            d: initialPath,
                            transition: {
                                duration: 0.5,
                                ease: [0.65, 0, 0.35, 1],
                                delay: 0.1,
                            },
                        }}
                        fill="#c0ad8b"
                    />
                </svg>
            </motion.header>
        </>
    );
}
