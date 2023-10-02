import { NavLink } from "react-router-dom";

import { delay, motion } from "framer-motion";

import { useState, useEffect } from "react";

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
                    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
                }}
                exit={{
                    y: "calc(-100% + -100px)",
                    transition: {
                        duration: 0.5,
                        ease: [0.65, 0, 0.35, 1],
                        delay: 0.05,
                    },
                }}
            >
                <motion.div
                    className="nav"
                    initial={{ height: "100%" }}
                    animate={{ height: "70%", transition: { duration: 1 } }}
                >
                    <div className="text-container">
                        {Navs.map((nav, idx) => (
                            <NavLink
                                onClick={() => setBurgerActive(false)}
                                to={`${base}${nav.to}`}
                                key={idx}
                            >
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{
                                        y: 0,
                                        transition: {
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
                                    <motion.p>{nav.name}</motion.p>
                                    <motion.p>{nav.name}</motion.p>
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
                                    duration: 1,
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
                            fill="#f5deb3"
                        />
                    </svg>
                </motion.div>

                <svg>
                    <motion.path
                        initial={{ d: initialPath }}
                        animate={{
                            d: animatedPath,
                            transition: {
                                duration: 1,
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
