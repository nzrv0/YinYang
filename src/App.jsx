// Dependecis for React App
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import { Navbar, DarkLightToggle, ScrollButton } from "./components";

// Dark Light Mode Provider
import { DarkLightProvider } from "./context/DarkLightContext";

import PageRouter from "./PageRouter";

function App() {
    return (
        // Create All Routes for Pages
        <BrowserRouter>
            <DarkLightProvider>
                <Navbar />
                <main className="container w-full h-auto">
                    <DarkLightToggle />
                    <ScrollButton />
                    <PageRouter />
                </main>
            </DarkLightProvider>
        </BrowserRouter>
    );
}

export default App;
