const Joi = require("joi");

// ───── Subschemas ─────

// Entidades dentro da legenda (caption_entities), usadas quando parse_mode não é usado
const entitySchema = Joi.object({
  offset: Joi.number().required(), // Posição inicial do texto estilizado
  length: Joi.number().required(), // Quantidade de caracteres estilizados
  type: Joi.string()
    .valid(
      // Tipo da entidade (negrito, link, user, etc)
      "mention",
      "hashtag",
      "cashtag",
      "bot_command",
      "url",
      "email",
      "phone_number",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "code",
      "pre",
      "text_link",
      "text_mention",
      "custom_emoji",
    )
    .required(),
  url: Joi.string().uri(), // Usado com type "text_link"
  user: Joi.object({
    // Usado com type "text_mention"
    id: Joi.number().required(),
    is_bot: Joi.boolean().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string(),
    username: Joi.string(),
  }),
  language: Joi.string(), // Usado com type "pre"
  custom_emoji_id: Joi.string(), // Usado com type "custom_emoji"
});

// Botões de inline_keyboard
const inlineButtonSchema = Joi.object({
  text: Joi.string().required(), // Texto do botão
  url: Joi.string().uri(), // Abre URL
  callback_data: Joi.string().max(64), // Dado enviado via callback_query
  switch_inline_query: Joi.string(), // Abre bot em modo inline (qualquer chat)
  switch_inline_query_current_chat: Joi.string(), // Abre bot inline no mesmo chat
  pay: Joi.boolean(), // Botão de pagamento
}).xor(
  "url",
  "callback_data",
  "switch_inline_query",
  "switch_inline_query_current_chat",
  "pay",
); // Só uma ação por botão

// Estrutura completa do reply_markup (4 possibilidades)
const replyMarkupSchema = Joi.alternatives().try(
  // Inline keyboard
  Joi.object({
    inline_keyboard: Joi.array()
      .items(Joi.array().items(inlineButtonSchema).required())
      .required(),
  }),

  // Teclado personalizado
  Joi.object({
    keyboard: Joi.array()
      .items(
        Joi.array()
          .items(
            Joi.alternatives()
              .try(
                Joi.string(), // apenas texto
                Joi.object({
                  // botão com ações adicionais
                  text: Joi.string().required(),
                  request_contact: Joi.boolean(),
                  request_location: Joi.boolean(),
                  request_poll: Joi.object({
                    type: Joi.string().valid("quiz", "regular"), // tipo de enquete
                  }),
                }),
              )
              .required(),
          )
          .required(),
      )
      .required(),
    resize_keyboard: Joi.boolean(), // Redimensiona o teclado
    one_time_keyboard: Joi.boolean(), // Teclado desaparece após uso
    input_field_placeholder: Joi.string(), // Placeholder no campo de entrada
    selective: Joi.boolean(), // Aparece apenas para usuários específicos
  }),

  // Remover teclado
  Joi.object({
    remove_keyboard: Joi.boolean().valid(true).required(), // Remove o teclado atual
    selective: Joi.boolean(),
  }),

  // Forçar resposta
  Joi.object({
    force_reply: Joi.boolean().valid(true).required(), // Força o usuário a responder
    input_field_placeholder: Joi.string(),
    selective: Joi.boolean(),
  }),
);

// ───── Schema principal: sendPhoto ─────

const sendPhotoSchema = Joi.object({
  chat_id: Joi.alternatives().try(Joi.string(), Joi.number()).required(), // ID ou @usuário/chat
  photo: Joi.string().required(), // URL, file_id ou "attach://file.jpg"
  caption: Joi.string().max(1024), // Legenda da foto
  parse_mode: Joi.string().valid("Markdown", "MarkdownV2", "HTML"), // Formatação de texto
  // caption_entities: Joi.array().items(entitySchema), // Entidades em vez de parse_mode
  // has_spoiler: Joi.boolean(),                       // Oculta a imagem até clique
  // disable_notification: Joi.boolean(),              // Silencia notificação
  // protect_content: Joi.boolean(),                   // Impede encaminhamento/salvamento
  // reply_to_message_id: Joi.number(),                // Responde a uma mensagem específica
  // allow_sending_without_reply: Joi.boolean(),       // Envia mesmo se msg original não existir
  // reply_markup: replyMarkupSchema                   // Um dos 4 tipos de marcação de resposta
}); //.xor('parse_mode', 'caption_entities');           // Apenas um dos dois deve ser usado

module.exports = { sendPhotoSchema };
