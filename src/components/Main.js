import React from "react";
import Body from "./roomBuilder/Body";
import Header from "./headerSection/Header";
import { Container } from "@mui/material";

const Main = () => {
    return (
        <div>
            <Container>
                <Header />
                <Body />
            </Container>
        </div>
    );
};

export default Main;
