const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { sendPhoto_appDriver } = require("./sendPhoto_appDriver");

// Scenario: Enviar uma foto com texto simples para um grupo com sucesso

// Given ('que eu tenho o chatId do grupo', () => {})

When("envio uma foto com texto simples para o grupo via API", () => {
  cy.get("@chatGroup").then((chatGroup) => {
    sendPhoto_appDriver.request({
      chat_id: chatGroup.chatId,
      photo:
        "https://images-porsche.imgix.net/-/media/9CD53A02737F40A0806BB5EAE1A80F54_D92CC07A446F4B0A8A492A88DD260C0C_911_carrera_gts_sideshot?w=2560&h=760&q=45&crop=faces%2Centropy%2Cedges&auto=format",
      caption: "Veja essa <b>imagem</b> incrível!",
      parse_mode: "HTML",
    });
  });
});

// Then ('o status da resposta deve ser 200', () => {})

// Then ('o retorno para a mensagem deve conter o Id da mensagem', () => {})
