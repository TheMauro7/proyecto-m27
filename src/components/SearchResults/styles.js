import styled from "styled-components";

export const ResultsContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.large};
    margin: 0 auto ${({ theme }) => theme.spacing.large};

    max-width: 900px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius};

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ResultsTitle = styled.h2`
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.large};

    color: ${({ theme }) => theme.colors.secondary};
`;

export const AlbumCard = styled.div`
    padding: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    background-color: ${({ theme }) => theme.colors.background};

    border-radius: ${({ theme }) => theme.borderRadius};

    border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const AlbumTitle = styled.h3`
    margin-bottom: ${({ theme }) => theme.spacing.small};

    color: ${({ theme }) => theme.colors.secondary};
`;

export const AlbumInfo = styled.p`
    margin-bottom: ${({ theme }) => theme.spacing.small};

    color: ${({ theme }) => theme.colors.gray};
`;

export const DetailsLink = styled.button`
    display: inline-block;

    padding: 8px 14px;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }
`;