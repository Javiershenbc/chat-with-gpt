import { FormattedMessage } from "react-intl";
import { OptionGroup } from "../core/options/option-group";

export const openAIOptions: OptionGroup = {
  id: "openai",
  options: [
    {
      id: "apiKey",
      defaultValue: "",
      displayOnSettingsScreen: "user",
      displayAsSeparateSection: true,
      renderProps: () => ({
        type: "password",
        label: "Your OpenAI API Key",
        placeholder: "sk-************************************************",
        description: (
          <>
            <p>
              <a
                href="https://platform.openai.com/account/api-keys"
                target="_blank"
                rel="noreferrer"
              >
                <FormattedMessage
                  defaultMessage="Encuentra tu API key aqui"
                  description="Label for the link that takes the user to the page on the OpenAI website where they can find their API key."
                />
              </a>
            </p>
            <p>
              <FormattedMessage defaultMessage="Su clave API se almacena únicamente en este dispositivo y nunca se transmite a nadie excepto a OpenAI." />
            </p>
            <p>
              <FormattedMessage defaultMessage="El uso de la clave API de OpenAI se factura a una tarifa de pago por uso, independiente de su suscripción a ChatGPT." />
            </p>
          </>
        ),
      }),
    },
  ],
};
