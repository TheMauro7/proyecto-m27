import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.large};
    text-align: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.white};
`;