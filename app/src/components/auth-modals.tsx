import styled from "@emotion/styled";
import { Button, Modal, PasswordInput, TextInput } from "@mantine/core";
import { useCallback } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useAppDispatch, useAppSelector } from "../store";
import {
  closeModals,
  openLoginModal,
  openSignupModal,
  selectModal,
} from "../store/ui";

const Container = styled.form`
  * {
    font-family: "Work Sans", sans-serif;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .mantine-TextInput-root,
  .mantine-PasswordInput-root {
    margin-top: 1rem;
  }

  .mantine-TextInput-root + .mantine-Button-root,
  .mantine-PasswordInput-root + .mantine-Button-root {
    margin-top: 1.618rem;
  }

  .mantine-Button-root {
    margin-top: 1rem;
  }

  label {
    margin-bottom: 0.25rem;
  }
`;

export function LoginModal(props: any) {
  const modal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const onClose = useCallback(() => dispatch(closeModals()), [dispatch]);
  const onCreateAccountClick = useCallback(
    () => dispatch(openSignupModal()),
    [dispatch]
  );

  return (
    <Modal opened={modal === "login"} onClose={onClose} withCloseButton={false}>
      <Container action="/chatapi/login" method="post">
        <h2>
          <FormattedMessage defaultMessage={"Sign in"} />
        </h2>
        <input type="hidden" name="redirect_url" value={window.location.href} />
        <TextInput
          label={intl.formatMessage({ defaultMessage: "Correo electrónico" })}
          name="username"
          placeholder={intl.formatMessage({
            defaultMessage: "Introduzca su correo electrónico",
          })}
          type="email"
          required
        />
        <PasswordInput
          label={intl.formatMessage({ defaultMessage: "Contraseña" })}
          name="password"
          placeholder={intl.formatMessage({
            defaultMessage: "Introduzca su contraseña",
          })}
          maxLength={500}
          required
        />
        <Button fullWidth type="submit">
          <FormattedMessage defaultMessage={"Entra"} />
        </Button>
        <Button fullWidth variant="subtle" onClick={onCreateAccountClick}>
          <FormattedMessage
            defaultMessage={"O cree una cuenta"}
            description="Label for a button on the Sign In page that lets the user create an account instead"
          />
        </Button>
      </Container>
    </Modal>
  );
}

export function CreateAccountModal(props: any) {
  const modal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const onClose = useCallback(() => dispatch(closeModals()), [dispatch]);
  const onSignInClick = useCallback(
    () => dispatch(openLoginModal()),
    [dispatch]
  );

  return (
    <Modal
      opened={modal === "signup"}
      onClose={onClose}
      withCloseButton={false}
    >
      <Container action="/chatapi/register" method="post">
        <h2>
          <FormattedMessage defaultMessage={"Crea una cuenta"} />
        </h2>
        <input type="hidden" name="redirect_url" value={window.location.href} />
        <TextInput
          label={intl.formatMessage({ defaultMessage: "Correo electrónico" })}
          name="username"
          placeholder={intl.formatMessage({
            defaultMessage: "Introduzca su correo electrónico",
          })}
          type="email"
          required
        />
        <PasswordInput
          label={intl.formatMessage({ defaultMessage: "Password" })}
          name="password"
          placeholder={intl.formatMessage({
            defaultMessage: "Introduzca su contraseña",
          })}
          minLength={6}
          maxLength={500}
          required
        />
        <Button fullWidth type="submit">
          <FormattedMessage defaultMessage={"Sign up"} />
        </Button>
        <Button fullWidth variant="subtle" onClick={onSignInClick}>
          <FormattedMessage
            defaultMessage={"O entre con una cuenta existente"}
            description="Label for a button on the Create Account page that lets the user sign into their existing account instead"
          />
        </Button>
      </Container>
    </Modal>
  );
}
