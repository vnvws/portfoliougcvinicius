# Plano para Corrigir o Formulário de Contato e Integração de E-mail

O usuário relatou que o formulário de "Solicitar Proposta" não está funcionando e as solicitações não estão chegando ao e-mail `comercial.viniciusugc@gmail.com`. Atualmente, a função `submitProposal` em `src/components/site/contact.functions.ts` apenas registra os dados no console sem realizar o envio real.

## Ações Necessárias

1. **Configurar o Conector do Resend**
   - Usar a ferramenta `standard_connectors--connect` para vincular o conector do Resend ao projeto.
   - Isso permitirá o envio de e-mails através da API do Resend de forma segura.

2. **Implementar o Envio de E-mail no Servidor**
   - Atualizar `src/components/site/contact.functions.ts` para usar o conector do Resend.
   - A função `submitProposal` enviará um e-mail formatado para `comercial.viniciusugc@gmail.com` contendo todos os dados do formulário (Nome, Empresa, E-mail, WhatsApp, Orçamento e Mensagem).

3. **Verificação**
   - Garantir que o tratamento de erros no frontend (`ContactSection.tsx`) informe corretamente o usuário em caso de falha no envio.

## Próximos Passos (Após Aprovação)

1. Executar `standard_connectors--connect(connector_id: "resend")`.
2. Solicitar ao usuário que configure a API Key do Resend na interface que aparecerá.
3. Modificar `src/components/site/contact.functions.ts` para implementar a lógica de envio via gateway do conector.
