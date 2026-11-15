import styled from 'styled-components';
import type { FormStatus } from '../../types';
import { btnBase, btnRojo } from '../../styles/mixins';

type StatusType = NonNullable<FormStatus>['type'];

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  padding: 56px 24px;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.rojo};
`;

export const Titulo = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 10px;
`;

export const Descripcion = styled.p`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.grisTexto};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  background: ${({ theme }) => theme.colors.blanco};
  border: 1px solid ${({ theme }) => theme.colors.grisLinea};
  padding: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 22px;
  }
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.negro};
`;

export const Input = styled.input<{ $error: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 0.9375rem;
  padding: 12px 14px;
  color: ${({ theme }) => theme.colors.negro};
  border: 1px solid
    ${({ $error, theme }) => ($error ? theme.colors.rojo : theme.colors.grisLinea)};
  background: ${({ $error, theme }) => ($error ? theme.colors.blanco : theme.colors.crema)};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.rojo};
  }
`;

export const MensajeError = styled.span`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.rojoHover};

  &:empty {
    display: none;
  }
`;

export const Boton = styled.button`
  ${btnBase}
  ${btnRojo}
  grid-column: 1 / -1;
  font-size: 0.8125rem;
  padding: 14px;
`;

export const Status = styled.p<{ $type?: StatusType }>`
  grid-column: 1 / -1;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  text-align: center;
  font-size: ${({ $type }) => ($type === 'success' ? '1.0625rem' : '0.875rem')};
  color: ${({ $type, theme }) =>
    $type === 'success' ? theme.colors.exito : theme.colors.rojoHover};

  &:empty {
    display: none;
  }
`;