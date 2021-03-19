import React from "react";
import Container from "../styles/container";
import Link from "next/link";


const Navigation: React.FC = ({children}) => {
    return (
        <div>
            <Container>
                <nav>
                    <Link href={'/'}>Main</Link>
                    <Link href={'/create'}>Create Post</Link>
                </nav>
            </Container>
        </div>
    );
};

export default Navigation;
