import styled from 'styled-components';
import { btnBase, btnRojo } from '../../styles/mixins';

export const Topbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 16px;
  padding: 8px 24px;
  background: ${({ theme }) => theme.colors.negro};
  color: ${({ theme }) => theme.colors.blanco};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6px 20px;
    font-size: 0.6875rem;
  }
`;

export const TopbarFecha = styled.p`
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
`;

export const TopbarRedes = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const TopbarLink = styled.a`
  &:hover {
    color: ${({ theme }) => theme.colors.rojo};
  }
`;

export const HeaderBar = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grisLinea};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 14px 20px;
  }
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.editorial};
  font-weight: 700;
  font-size: 1.625rem;
  color: ${({ theme }) => theme.colors.rojo};
  letter-spacing: 0.04em;
`;

export const Hero = styled.section`
  text-align: center;
  padding: 56px 24px 44px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grisLinea};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 20px 32px;
  }
`;

export const HeroTitulo = styled.h1`
  font-size: clamp(28px, 5vw, 44px);
  line-height: 1.15;
  max-width: 20ch;
  margin: 0 auto 14px;
`;

export const HeroSubtitulo = styled.p`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grisTexto};
  font-size: 1.0625rem;
  max-width: 46ch;
  margin: 0 auto;
`;

export const Nav = styled.nav<{ $abierto: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 3;
    flex-basis: 100%;
    max-height: ${({ $abierto }) => ($abierto ? '300px' : '0')};
    padding-top: ${({ $abierto }) => ($abierto ? '8px' : '0')};
    overflow: hidden;
    visibility: ${({ $abierto }) => ($abierto ? 'visible' : 'hidden')};
    transition: max-height 0.25s ease, visibility 0.25s;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 4px 0;
  }
`;

export const NavLink = styled.a<{ $activo?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: 700;
  font-size: 0.8125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-bottom: 4px;
  color: ${({ $activo, theme }) => ($activo ? theme.colors.rojo : 'inherit')};
  border-bottom: 2px solid
    ${({ $activo, theme }) => ($activo ? theme.colors.rojo : 'transparent')};
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.rojo};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const HeaderBtn = styled.a`
  ${btnBase}
  ${btnRojo}
  font-size: 0.75rem;
  padding: 10px 18px;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 9px 14px;
  }
`;

export const Toggle = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 24px;
  height: 20px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const ToggleLinea = styled.span`
  display: block;
  height: 2px;
  background: ${({ theme }) => theme.colors.negro};
`;