import { useSubscriptionForm } from '../../hooks/useSubscriptionForm';
import * as S from './SubscriptionForm.styles';

interface SubscriptionFormProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SubscriptionForm({ eyebrow, title, description }: SubscriptionFormProps) {
  const { values, errors, status, handleChange, handleSubmit } = useSubscriptionForm();

  return (
    <S.Section id="suscripcion" aria-labelledby="suscripcion-titulo">
      <div>
        <S.Eyebrow>{eyebrow}</S.Eyebrow>
        <S.Titulo id="suscripcion-titulo">{title}</S.Titulo>
        <S.Descripcion>{description}</S.Descripcion>
      </div>

      <S.Form id="subscriptionForm" onSubmit={handleSubmit} noValidate>
        <S.Campo>
          <S.Label htmlFor="nombre">Nombre</S.Label>
          <S.Input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={values.nombre}
            onChange={handleChange}
            $error={Boolean(errors.nombre)}
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby="nombreError"
          />
          <S.MensajeError id="nombreError" aria-live="polite">
            {errors.nombre}
          </S.MensajeError>
        </S.Campo>

        <S.Campo>
          <S.Label htmlFor="email">Correo electrónico</S.Label>
          <S.Input
            type="email"
            id="email"
            name="email"
            placeholder="tu@correo.com"
            value={values.email}
            onChange={handleChange}
            $error={Boolean(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby="emailError"
          />
          <S.MensajeError id="emailError" aria-live="polite">
            {errors.email}
          </S.MensajeError>
        </S.Campo>

        <S.Boton type="submit">Suscribirme</S.Boton>

        <S.Status $type={status?.type} aria-live="polite">
          {status?.message}
        </S.Status>
      </S.Form>
    </S.Section>
  );
}