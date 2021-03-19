import React from "react";
import Container from "../styles/container";
import Navigation from "./navigation";


const MainLayout: React.FC = ({children}) => {
    return (
        <div>
            <Navigation />
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default MainLayout;
