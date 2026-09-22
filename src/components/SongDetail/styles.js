import styled from "styled-components";

export const DetailContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.large};
`;

export const BackLink = styled.a`
    display: inline-block;
    margin-bottom: ${({ theme }) => theme.spacing.large};

    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
`;

export const AlbumTitle = styled.h1`
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const ArtistName = styled.h2`
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const AlbumInfo = styled.p`
    margin-bottom: ${({ theme }) => theme.spacing.small};
    line-height: 1.6;
`;

export const AlbumDescription = styled.p`
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.large};

    line-height: 1.7;
`;

export const AlbumImage = styled.img`
    display: block;
    width: 100%;
    max-width: 500px;

    margin: 0 auto;

    border-radius: ${({ theme }) => theme.borderRadius};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;