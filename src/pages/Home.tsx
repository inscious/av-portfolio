import React from "react";
import styled from "styled-components";
import {
    Hero,
    About,
    Skills,
    Portfolio,
    Contact,
} from "../components/sections";
import { Footer } from "../components/layout";

const HomePage = styled.div`
    overflow-x: hidden;
`;

const Home: React.FC = () => {
    return (
        <HomePage>
            <Hero />
            <About />
            <Skills />
            <Portfolio />

            <Contact />
            <Footer />
        </HomePage>
    );
};

export default Home;
