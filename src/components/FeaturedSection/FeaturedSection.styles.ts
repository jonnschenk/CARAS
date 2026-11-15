import styled from 'styled-components';

export const Section = styled.section`
  padding: 56px 24px;
  max-width: 1080px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article``;

export const Imagen = styled.img`
  aspect-ratio: 4 / 3;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const CardTitulo = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

export const CardTexto = styled.p`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grisTexto};
`;
