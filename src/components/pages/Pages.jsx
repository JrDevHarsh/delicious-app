import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom"
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/cusine/:type" element={<Cusine />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </AnimatePresence>
    );
}

export default Pages;
