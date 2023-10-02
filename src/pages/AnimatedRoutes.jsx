import Error from "./Error";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Nav from "../components/Nav";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes({ base }) {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path={`${base}`} element={<Home />} />
                    <Route path={`${base}about`} element={<About />} />
                    <Route path={`${base}contact`} element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
