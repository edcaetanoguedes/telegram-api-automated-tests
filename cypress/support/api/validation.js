const validateSchema = ({ schema, payload }) => {
  const { error } = schema.validate(payload, { abortEarly: false });

  if (error) {
    const messages = error.details.map((detail) => detail.message);
    throw new Error(messages);
  }

  return true;
};

module.exports = { validateSchema };
