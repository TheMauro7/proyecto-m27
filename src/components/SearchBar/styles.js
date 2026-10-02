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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #ffe5e5;
`;

export const RetryButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
