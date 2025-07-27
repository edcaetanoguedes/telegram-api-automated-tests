Feature: Envio de Foto via API

    @backend @regressivo @smoke @api
    Scenario: Enviar uma foto com texto simples para um grupo com sucesso
        Given que eu tenho o chatId do grupo
        When envio uma foto com texto simples para o grupo via API
        Then o status da resposta deve ser 200
        Then o retorno para a mensagem deve conter o Id da mensagem