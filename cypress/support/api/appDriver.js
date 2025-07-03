
export class ApiDriver {
    sendMessage(payload) {
        cy.request({
            method: "POST",
            url: `${Cypress.env("BACKEND_URL")}/message/send`,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
            failOnStatusCode: false
        }).as("response")
    }
}