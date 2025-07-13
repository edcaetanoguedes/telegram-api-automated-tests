const HEADERS = {
  "Content-Type": "application/json",
};

class apiAppDriver {
  // Padrão para requisições POST
  static requestPost({ url, body, alias }) {
    cy.request({
      method: "POST",
      url: url,
      headers: HEADERS,
      body: body,
      failOnStatusCode: false,
    }).as(alias);
  }
}

module.exports = { apiAppDriver };
