import React from "react";

import NavBar from "./Navbar";
import HeroSection from "./Herosection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App= () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <AppSection></AppSection>
            <CardSection/>
            <Footer/>
        </div>
    )
};


export default App;