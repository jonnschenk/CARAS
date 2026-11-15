import { css } from 'styled-components';

export const btnBase = css`
  border: none;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease;
`;

export const btnRojo = css`
  background: ${({ theme }) => theme.colors.rojo};
  color: ${({ theme }) => theme.colors.blanco};

  &:hover {
    background: ${({ theme }) => theme.colors.rojoHover};
  }
`;