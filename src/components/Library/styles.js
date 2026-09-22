import styled from "styled-components";

export const LibraryContainer = styled.section`
    padding: ${({ theme }) => theme.spacing.large};

    background-color: ${({ theme }) => theme.colors.white};

    border-radius: ${({ theme }) => theme.borderRadius};

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const LibraryTitle = styled.h2`
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};

    color: ${({ theme }) => theme.colors.secondary};
`;

export const EmptyMessage = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`;