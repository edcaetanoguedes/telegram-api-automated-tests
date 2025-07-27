const { apiAppDriver } = require("../../../support/api/apiAppDriver");
const { validateSchema } = require("../../../support/api/validation");
const { sendPhotoSchema } = require("./sendPhoto_schema");

class sendPhoto_appDriver {
  static request(payload) {
    const validation = validateSchema({ schema: sendPhotoSchema, payload });

    apiAppDriver.requestPost({
      url: `${Cypress.env("BACKEND_URL")}/photo/send`,
      body: JSON.stringify(payload),
      alias: "response",
    });
  }
}

module.exports = { sendPhoto_appDriver };
