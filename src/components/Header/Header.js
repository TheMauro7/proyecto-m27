import React from "react";
import { HeaderContainer, Title, Subtitle } from "./styles";

const Header = ({ appName }) => {
    return (
        <HeaderContainer>
            <Title>{appName}</Title>
            <Subtitle>Busca tus artistas y álbumes favoritos</Subtitle>
        </HeaderContainer>
    );
};

export default Header;