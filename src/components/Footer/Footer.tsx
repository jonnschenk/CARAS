import type { SocialLink } from '../../types';
import * as S from './Footer.styles';

interface FooterProps {
  socialLinks: SocialLink[];
  email: string;
  phone: string;
}

export function Footer({ socialLinks, email, phone }: FooterProps) {
  const phoneHref = `tel:${phone.replace(/\s/g, '')}`;
  const year = new Date().getFullYear();

  return (
    <S.FooterWrapper>
      <S.Contenido>
        <S.Logo>CARAS</S.Logo>

        <S.Redes aria-label="Redes sociales de CARAS">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </S.Redes>

        <S.Contacto>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={phoneHref}>{phone}</a>
        </S.Contacto>
      </S.Contenido>

      <S.Legal>© {year} Caras México. Todos los derechos reservados.</S.Legal>
    </S.FooterWrapper>
  );
}