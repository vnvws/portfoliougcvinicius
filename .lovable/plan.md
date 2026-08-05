# Plano de Substituição do Player de Vídeo

O usuário deseja substituir o player do YouTube por uma alternativa gratuita que consuma menos recursos em dispositivos móveis. Atualmente, o projeto utiliza `youtubeUrl` em alguns nichos e arquivos MP4 locais em outros.

## Análise da Situação Atual
- **YouTube:** Causa carregamento pesado de scripts externos, redirecionamentos indesejados em mobile e marcas d'água/títulos difíceis de remover completamente.
- **Vídeos Locais (MP4):** Estão sendo carregados via `src/assets/videos/` e processados como assets. Isso é ótimo para performance se os arquivos forem pequenos, pois o navegador lida nativamente com a reprodução sem scripts pesados.

## Proposta: Player Nativo HTML5 Otimizado
A melhor opção "free" e leve para dispositivos móveis é utilizar o **player nativo do navegador (HTML5 Video API)**. Para isso, precisamos que todos os vídeos estejam hospedados como arquivos diretos (MP4/WebM).

### Vantagens do Player Nativo:
1. **Zero Scripts Externos:** Não carrega bibliotecas pesadas como o player do YouTube.
2. **Performance Mobile:** O sistema operacional (iOS/Android) gerencia a decodificação de hardware de forma nativa e eficiente.
3. **Controle Total:** Podemos customizar a interface (play/pause, neon colors) sem interferência de marcas d'água.
4. **Respeito ao Layout:** Não abre o app do YouTube nem redireciona o usuário.

## Passos da Implementação

1.  **Uniformização dos Dados (`src/components/site/niches.ts`):**
    - Identificar todos os itens que usam `youtubeUrl`.
    - Solicitar ao usuário os arquivos MP4 desses vídeos ou indicar que, para a melhor performance free, o ideal é usar arquivos diretos.
    - *Nota:* Como já existem muitos vídeos MP4 no projeto, a infraestrutura já suporta isso.

2.  **Otimização do Componente `InlineVideo.tsx`:**
    - Remover a lógica de `iframe` do YouTube.
    - Focar no elemento `<video>` nativo.
    - Implementar `preload="none"` ou `preload="metadata"` para evitar download massivo de dados no carregamento inicial.
    - Usar `IntersectionObserver` (que já existe no componente) para carregar o `src` do vídeo apenas quando estiver próximo da tela (Lazy Loading de vídeos).

3.  **Remoção de Código Morto:**
    - Deletar `src/components/site/youtube.ts`.

4.  **Configuração de Servidor (Dica para o Usuário):**
    - Recomendar o uso de um serviço de storage que suporte streaming (Byte-Range requests), como o próprio Supabase Storage (que o projeto já usa via Lovable Cloud), para que o vídeo não precise ser baixado inteiro para começar a tocar.

## Próximos Passos
- Aguardar confirmação do usuário sobre a preferência pelo player nativo (HTML5).
- Solicitar os links ou arquivos MP4 para substituir os vídeos do YouTube na seção "Grupos de Promoção".

---
*Este plano foca na simplicidade e eficiência máxima para dispositivos móveis, eliminando a dependência de players de terceiros.*
