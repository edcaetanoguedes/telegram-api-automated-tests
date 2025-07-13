const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { sendMessage_appDriver } = require("./sendMessage_appDriver");

// Scenario: Enviar uma mensagem de texto simples para um grupo com sucesso

Given("que eu tenho o chatId do grupo", () => {
  cy.fixture("mocks/chatGroup.json").as("chatGroup");
});

When("envio a mensagem de texto simples para o grupo via API", () => {
  cy.get("@chatGroup").then((chatGroup) => {
    sendMessage_appDriver.request({
      chat_id: chatGroup.chatId,
      text: "Cypress: Testando",
    });
  });
});

Then("o status da resposta deve ser 200", () => {
  cy.get("@response").then((response) => {
    expect(response.status).to.eq(200);
    cy.log(response.body);
  });
});

Then("o retorno para a mensagem deve conter o Id da mensagem", () => {
  cy.get("@response").then((response) => {
    expect(response.body).to.have.property("message_id");
  });
});

// Scenario: Enviar uma mensagem de texto html para um grupo com sucesso

// Given ('que eu tenho o chatId do grupo', () => {})

When("envio a mensagem em html para o grupo via API", () => {
  cy.get("@chatGroup").then((chatGroup) => {
    sendMessage_appDriver.request({
      chat_id: chatGroup.chatId,
      text: "<b>Cypress:</b> Testando",
      parse_mode: "HTML",
    });
  });
});

// Then ('o status da resposta deve ser 200', () => {})

// Then ('o retorno para a mensagem deve conter o Id da mensagem', () => {})

// Scenario: Enviar uma mensagem de texto markdown para um grupo com sucesso

// Given ('que eu tenho o chatId do grupo', () => {})

When("envio a mensagem em markdown para o grupo via API", () => {
  cy.get("@chatGroup").then((chatGroup) => {
    sendMessage_appDriver.request({
      chat_id: chatGroup.chatId,
      text: "*Cypress:* Testando",
      parse_mode: "Markdown",
    });
  });
});

// Then ('o status da resposta deve ser 200', () => {})

// Then ('o retorno para a mensagem deve conter o Id da mensagem', () => {})
