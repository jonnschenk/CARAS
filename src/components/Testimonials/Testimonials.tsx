import type { Testimonial } from '../../types';
import * as S from './Testimonials.styles';

interface TestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

export function Testimonials({ title, testimonials }: TestimonialsProps) {
  return (
    <S.Section id="testimonios" aria-labelledby="testimonios-titulo">
      <S.Titulo id="testimonios-titulo">{title}</S.Titulo>

      <S.Grid>
        {testimonials.map((testimonial) => (
          <S.Card key={testimonial.id}>
            <S.Avatar src={testimonial.avatar} alt={testimonial.avatarAlt} />
            <S.Cita>“{testimonial.quote}”</S.Cita>
            <S.Autor>{testimonial.author}</S.Autor>
          </S.Card>
        ))}
      </S.Grid>
    </S.Section>
  );
}