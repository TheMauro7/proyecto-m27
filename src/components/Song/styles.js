import styled from "styled-components";

export const SongCard = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SongTitle = styled.h3`
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const SongArtist = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`;

export const SongButton = styled.button`
    margin-top: ${({ theme }) => theme.spacing.small};
    padding: 8px 14px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    background-color: ${({ favorite, theme }) =>
        favorite
            ? theme.colors.danger
            : theme.colors.primary};

    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;