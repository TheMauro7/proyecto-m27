import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.small};
    margin: ${({ theme }) => theme.spacing.large} 0;
`;

export const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const SearchButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;