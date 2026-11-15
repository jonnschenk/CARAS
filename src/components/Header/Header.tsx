import { socialLinks } from '../../data/socialLinks';
import * as S from './Header.styles';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <S.Topbar>
        <S.TopbarFecha>Domingo, 30 de agosto de 2026</S.TopbarFecha>
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
      </S.HeaderBar>

      <S.Hero>
        <S.HeroTitulo>{title}</S.HeroTitulo>
        <S.HeroSubtitulo>{subtitle}</S.HeroSubtitulo>
      </S.Hero>
    </>
  );
}