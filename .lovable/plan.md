# Plano: Transição para Reprodutor YouTube

O usuário sugeriu utilizar o reprodutor do YouTube para resolver os problemas de desempenho e estouro de memória no mobile (iOS), já que o motor do Safari tem limites rígidos para múltiplos elementos `<video>`.

## Mudanças Propostas

### 1. Refatoração do Componente `InlineVideo.tsx`
- **Carregamento sob demanda**: Manteremos a lógica de `IntersectionObserver`, mas em vez de montar um elemento `<video>`, montaremos um `iframe` do YouTube apenas quando o vídeo for ativado (clique).
- **Miniaturas de alta qualidade**: Utilizaremos as APIs do YouTube (`i.ytimg.com/vi/ID/maxresdefault.jpg`) para mostrar capas nítidas sem carregar o player pesado antecipadamente.
- **Controle centralizado**: Continuaremos garantindo que apenas um vídeo seja reproduzido por vez, pausando/desmontando os outros para economizar recursos.

### 2. Atualização da Estrutura de Dados (`niches.ts`)
- Adicionaremos suporte para `youtubeId` no objeto `VideoItem`.
- Criaremos uma função utilitária para extrair o ID de qualquer URL do YouTube (YouTube, Shorts, Live, etc).

### 3. Melhoria na Performance Mobile
- O YouTube lida de forma muito mais eficiente com a decodificação de hardware em dispositivos móveis do que arquivos brutos servidos diretamente, o que deve eliminar o erro "Esse site não pode ser exibido" no iPhone.

## Próximos Passos
1. Modificar `InlineVideo.tsx` para aceitar IDs do YouTube e renderizar iframes otimizados.
2. Ajustar `VideoCardVertical` e `VideoCardHorizontal` para lidar com a nova fonte de dados.
3. Solicitar ao usuário os links do YouTube para os vídeos atuais.

---

**Pergunta para o usuário:**
Você já tem os links do YouTube para esses vídeos ou gostaria que eu configurasse a estrutura primeiro para que você possa ir preenchendo os IDs conforme faz os uploads?
