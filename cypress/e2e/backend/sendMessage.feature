Feature: Envio de Mensagens via API

    Scenario: Enviar uma mensagem de texto simples para um grupo com sucesso
        Given que eu tenho o chatId do grupo
        When envio a mensagem de texto simples para o grupo via API
        Then o status da resposta deve ser 200
        Then o retorno para a mensagem deve conter o Id da mensagem
    
    Scenario: Enviar uma mensagem de texto html para um grupo com sucesso
        Given que eu tenho o chatId do grupo
        When envio a mensagem em html para o grupo via API
        Then o status da resposta deve ser 200
        Then o retorno para a mensagem deve conter o Id da mensagem
    
    Scenario: Enviar uma mensagem de texto markdown para um grupo com sucesso
        Given que eu tenho o chatId do grupo
        When envio a mensagem em markdown para o grupo via API
        Then o status da resposta deve ser 200
        Then o retorno para a mensagem deve conter o Id da mensagem