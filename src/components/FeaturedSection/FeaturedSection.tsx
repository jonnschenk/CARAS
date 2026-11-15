import type { Benefit } from '../../types';
import * as S from './FeaturedSection.styles';

interface FeaturedSectionProps {
  title: string;
  benefits: Benefit[];
}

export function FeaturedSection({ title, benefits }: FeaturedSectionProps) {
  return (
    <S.Section id="beneficios" aria-labelledby="beneficios-titulo">
      <S.Titulo id="beneficios-titulo">{title}</S.Titulo>

      <S.Grid>
        {benefits.map((benefit) => (
          <S.Card key={benefit.id}>
            <S.Imagen src={benefit.image} alt={benefit.imageAlt} />
            <S.CardTitulo>{benefit.title}</S.CardTitulo>
            <S.CardTexto>{benefit.description}</S.CardTexto>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}