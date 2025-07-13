const { apiAppDriver } = require("../../../support/api/apiAppDriver");
const { validateSchema } = require("../../../support/api/validation");
const { sendMessageSchema } = require("./sendMessage_schema");

class sendMessage_appDriver {
  static request(payload) {
    const validation = validateSchema({ schema: sendMessageSchema, payload });

    apiAppDriver.requestPost({
      url: `${Cypress.env("BACKEND_URL")}/message/send`,
      body: JSON.stringify(payload),
      alias: "response",
    });
  }
}

module.exports = { sendMessage_appDriver };
