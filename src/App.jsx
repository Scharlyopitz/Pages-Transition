import Burger from "./components/Burger";
import Nav from "./components/Nav";
import AnimatedRoutes from "./pages/AnimatedRoutes";

import { AnimatePresence } from "framer-motion";

import { useState } from "react";

function App() {
    const base = "/Pages-Transition/";
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <>
            <Burger
                setBurgerActive={setBurgerActive}
                burgerActive={burgerActive}
            />

            <AnimatePresence>
                {burgerActive ? (
                    <Nav
                        base={base}
                        burgerActive={burgerActive}
                        setBurgerActive={setBurgerActive}
                    />
                ) : null}
            </AnimatePresence>
            <AnimatedRoutes base={base} />
        </>
    );
}

export default App;
