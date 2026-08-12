# Auditoria e Plano de Otimização Técnica

Este documento detalha os problemas identificados durante a auditoria técnica e o plano de ação para corrigi-los, priorizando performance, estabilidade e fluidez da experiência, **sem alterar o design aprovado**.

## 1. Auditoria de Problemas

### A. Jitter e Recalcule de Layout no Safari/iOS
*   **O que está errado:** O `FixedScale.tsx` usa `requestAnimationFrame` e `ResizeObserver` para calcular a altura escalada, mas o cálculo `Math.ceil(contentHeight * currentScale)` pode causar oscilações de 1px no Safari, gerando um efeito de "jitter" durante o scroll ou carregamento.
*   **Onde está o problema:** `src/components/site/FixedScale.tsx`.
*   **Por que prejudica:** Causa instabilidade visual e saltos no scroll em dispositivos móveis.
*   **Como será corrigido:** Implementar um "throttle" mais robusto no cálculo da altura e utilizar `Math.round` com uma margem de segurança maior. Adicionar `contain: paint` no container para isolar o layout.
*   **Altera o design?** Não.

### B. Gargalo de Renderização em Seções Pesadas (Abas do Portfólio)
*   **O que está errado:** Embora usemos abas, a troca de nicho causa um "flash" ou delay perceptível porque o React precisa remontar todo o grid de vídeos e os componentes `Reveal`.
*   **Onde está o problema:** `src/routes/index.tsx` e `src/components/site/Reveal.tsx`.
*   **Por que prejudica:** A transição entre nichos parece "travada" e menos fluida do que o resto do site.
*   **Como será corrigido:** Otimizar o componente `Reveal` para usar `intersectionObserver` de forma mais eficiente e evitar execuções desnecessárias. Usar `React.memo` no `PortfolioGrid` para evitar re-renders de vídeos que não mudaram.
*   **Altera o design?** Não.

### C. Performance do Cursor Customizado no Mobile
*   **O que está errado:** O `NeonCursor` está sendo renderizado mesmo em dispositivos touch, embora o CSS tente escondê-lo. O JS continua ouvindo eventos de `mousemove`.
*   **Onde está o problema:** `src/components/site/NeonCursor.tsx`.
*   **Por que prejudica:** Consumo desnecessário de CPU e bateria no mobile.
*   **Como será corrigido:** Desativar completamente o componente via JS se o dispositivo for touch (`matchMedia("(pointer: coarse)")`).
*   **Altera o design?** Não (já estava escondido via CSS, agora será removido do processamento).

### D. Acessibilidade e Semântica
*   **O que está errado:** Muitos elementos interativos (botões de nicho, logos da marquee) usam `cursor-none` para forçar o cursor customizado, mas não possuem labels de acessibilidade claros ou estados de foco visíveis para navegação via teclado.
*   **Onde está o problema:** `src/routes/index.tsx`, `src/components/site/BrandMarquee.tsx`.
*   **Por que prejudica:** Dificulta a navegação para usuários com tecnologias assistivas e torna a experiência menos "robusta".
*   **Como será corrigido:** Adicionar `aria-label` onde falta e garantir que o estado `:focus-visible` seja funcional (mesmo que o cursor customizado o siga).
*   **Altera o design?** Não.

### E. Otimização de Imagens (Favicon e Assets)
*   **O que está errado:** A carga inicial pode ser otimizada garantindo que imagens críticas (Hero) tenham `fetchpriority="high"`.
*   **Onde está o problema:** `src/routes/index.tsx`.
*   **Por que prejudica:** O LCP (Largest Contentful Paint) pode ser melhorado.
*   **Como será corrigido:** Adicionar atributos de prioridade e decodificação assíncrona.
*   **Altera o design?** Não.

## 2. Plano de Execução

### Fase 1: Estabilização de Layout (Core)
- Refatorar `FixedScale.tsx` para eliminar jitter.
- Otimizar `src/styles.css` com propriedades de contenção de layout.

### Fase 2: Performance de Interação
- Otimizar `NeonCursor` para mobile.
- Refinar `Reveal.tsx` e lógica de abas no `index.tsx`.
- Aplicar `memo` em componentes de grid.

### Fase 3: Robustez e Acessibilidade
- Revisão de ARIA e semântica.
- Otimização de carregamento de assets.

---
**Confirmação:** Nenhuma das alterações propostas modificará a aparência visual, cores, tipografia ou disposição dos elementos. O foco é puramente técnico e de experiência de uso.
