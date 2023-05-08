import { defaultModel } from "../core/chat/openai";
import { OptionGroup } from "../core/options/option-group";

export const parameterOptions: OptionGroup = {
  id: "parameters",
  options: [
    {
      id: "model",
      defaultValue: defaultModel,
      resettable: false,
      scope: "user",
      displayOnSettingsScreen: "chat",
      displayAsSeparateSection: true,
      displayInQuickSettings: {
        name: "Model",
        displayByDefault: true,
        label: (value) => value,
      },
      renderProps: (value, options, context) => ({
        type: "select",
        label: "Model",
        description:
          value === "gpt-4" &&
          context.intl.formatMessage(
            {
              defaultMessage:
                "Nota: GPT-4 sólo funcionará si su cuenta OpenAI tiene acceso al nuevo modelo. <a>Solicite el acceso aquí.</a>",
            },
            {
              a: (text: string) => (
                <a
                  href="https://openai.com/waitlist/gpt-4-api"
                  target="_blank"
                  rel="noreferer"
                >
                  {text}
                </a>
              ),
            } as any
          ),
        options: [
          {
            label: "GPT 3.5 Turbo (default)",
            value: "gpt-3.5-turbo",
          },
          {
            label: "GPT 4 (requires invite)",
            value: "gpt-4",
          },
        ],
      }),
    },
    {
      id: "temperature",
      defaultValue: 0.5,
      resettable: true,
      scope: "chat",
      displayOnSettingsScreen: "chat",
      displayAsSeparateSection: true,
      displayInQuickSettings: {
        name: "Temperature",
        displayByDefault: false,
        label: (value) => "Temperature: " + value.toFixed(1),
      },
      renderProps: (value, options, context) => ({
        type: "slider",
        label: "Temperature: " + value.toFixed(1),
        min: 0,
        max: 1,
        step: 0.1,
        description: context.intl.formatMessage({
          defaultMessage:
            "El parámetro temperatura controla la aleatoriedad de las respuestas de la IA. Los valores más bajos harán que la IA sea más predecible, mientras que los valores más altos la harán más creativa.",
        }),
      }),
    },
  ],
};
