import { useState } from 'react';
import { socialLinks } from '../../data/socialLinks';
import { navLinks } from '../../data/navLinks';
import * as S from './Header.styles';

// Fecha de hoy en español, p. ej. "Domingo, 15 de noviembre de 2026"
function getFechaDeHoy(): string {
  const fecha = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return fecha.charAt(0).toUpperCase() + fecha.slice(1);
}

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuAbierto((abierto) => !abierto);
  };

  return (
    <>
      <S.Topbar>
        <S.TopbarFecha>{getFechaDeHoy()}</S.TopbarFecha>
        <S.TopbarRedes aria-label="Redes sociales de CARAS">
          {socialLinks.map((link) => (
            <S.TopbarLink key={link.name} href={link.href}>
              {link.name}
            </S.TopbarLink>
          ))}
        </S.TopbarRedes>
      </S.Topbar>

      <S.HeaderBar>
        <S.Logo href="/">CARAS</S.Logo>

        <S.Nav id="nav-primary" aria-label="Navegación principal" $abierto={menuAbierto}>
          <S.NavList>
            {navLinks.map((item) => (
              <li key={item.label}>
                <S.NavLink
                  href={item.href}
                  $activo={item.active}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </S.NavLink>
              </li>
            ))}
          </S.NavList>
        </S.Nav>

        <S.Actions>
          <S.HeaderBtn href="#suscripcion">Suscribirme</S.HeaderBtn>
          <S.Toggle
            type="button"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuAbierto}
            aria-controls="nav-primary"
            onClick={toggleMenu}
          >
            <S.ToggleLinea />
            <S.ToggleLinea />
            <S.ToggleLinea />
          </S.Toggle>
        </S.Actions>
      </S.HeaderBar>

      <S.Hero>
        <S.HeroTitulo>{title}</S.HeroTitulo>
        <S.HeroSubtitulo>{subtitle}</S.HeroSubtitulo>
      </S.Hero>
    </>
  );
}