import styled from 'styled-components';

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.negro};
  color: ${({ theme }) => theme.colors.blanco};
  padding: 56px 24px;
  text-align: center;
`;

export const Titulo = styled.h2`
  color: ${({ theme }) => theme.colors.blanco};
  font-size: 1.875rem;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  max-width: 1080px;
  margin: 0 auto;
`;

export const Card = styled.blockquote`
  flex: 1 1 280px;
  max-width: 320px;
  background: ${({ theme }) => theme.colors.negroTarjeta};
  border: 1px solid ${({ theme }) => theme.colors.negroBorde};
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const Cita = styled.p`
  font-style: italic;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 14px;
`;

export const Autor = styled.footer`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.grisClaro};
`;