const Joi = require("joi");

// Botão inline
const inlineKeyboardButtonSchema = Joi.object({
  text: Joi.string().required(),
  url: Joi.string().uri(),
  callback_data: Joi.string().max(64),
  switch_inline_query: Joi.string(),
  switch_inline_query_current_chat: Joi.string(),
  pay: Joi.boolean(),
}).xor(
  "url",
  "callback_data",
  "switch_inline_query",
  "switch_inline_query_current_chat",
  "pay",
);

// Botão do teclado personalizado
const keyboardButtonSchema = Joi.alternatives().try(
  Joi.string(),
  Joi.object({
    text: Joi.string().required(),
    request_contact: Joi.boolean(),
    request_location: Joi.boolean(),
    request_poll: Joi.object({
      type: Joi.string().valid("quiz", "regular").optional(),
    }).optional(),
  }),
);

// reply_markup — os 4 tipos possíveis
const replyMarkupSchema = Joi.alternatives().try(
  Joi.object({
    inline_keyboard: Joi.array()
      .items(
        Joi.array().items(inlineKeyboardButtonSchema.required()).required(),
      )
      .required(),
  }),
  Joi.object({
    keyboard: Joi.array()
      .items(Joi.array().items(keyboardButtonSchema.required()).required())
      .required(),
    resize_keyboard: Joi.boolean(),
    one_time_keyboard: Joi.boolean(),
    selective: Joi.boolean(),
    input_field_placeholder: Joi.string(),
  }),
  Joi.object({
    remove_keyboard: Joi.boolean().valid(true).required(),
    selective: Joi.boolean(),
  }),
  Joi.object({
    force_reply: Joi.boolean().valid(true).required(),
    input_field_placeholder: Joi.string(),
    selective: Joi.boolean(),
  }),
);

// Schema principal do sendMessage
const sendMessageSchema = Joi.object({
  chat_id: Joi.alternatives().try(Joi.string(), Joi.number()).required(),
  text: Joi.string().required(),
  parse_mode: Joi.string().valid("Markdown", "MarkdownV2", "HTML"), // São Case-sensitive

  link_preview_options: Joi.object({
    is_disabled: Joi.boolean().default(true),
    url: Joi.string().uri(),
    show_above_text: Joi.boolean().default(true),
  }),

  disable_notification: Joi.boolean(), // Desativar notificação
  protect_content: Joi.boolean(), // Impedir salvar e compartilhar
  reply_to_message_id: Joi.number(), // ID da mensagem a ser respondida
  allow_sending_without_reply: Joi.boolean(), // Permitir que uma mensagem já inexistente possa ser respondida?

  reply_markup: replyMarkupSchema,
});

module.exports = { sendMessageSchema };
