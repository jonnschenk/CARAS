import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.rojo};
  color: ${({ theme }) => theme.colors.blanco};
  padding: 40px 24px 24px;
`;

export const Contenido = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    max-width: 1080px;
    margin: 0 auto 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.editorial};
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Redes = styled.nav`
  display: flex;
  gap: 22px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const Contacto = styled.address`
 display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: ${({ theme }) => theme.fonts.ui};
    fonst-size: 0.8125rem;
    font-style: normal;
    text-align: right;

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
    align-items: center;
  }
`;

export const Legal = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 0.6875rem;
  color: rgba(255, 255, 255, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  padding-top: 16px;
  max-width: 1080px;
  margin: 0 auto;
`;
