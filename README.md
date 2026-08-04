# Portfólio UGC - Vinícius Araújo

Crie um site de portfólio para um UGC Creator (criador de conteúdo para marcas), modernizando o site atual feito no Canva, disponível em: https://viniciusaraujougc.my.canva.site/

Use esse link apenas como REFERÊNCIA DE ESTRUTURA GERAL (sequência de seções). O conteúdo de vídeos será organizado conforme especificado abaixo — não tente extrair conteúdo do link, ele não é acessível programaticamente.

IMPORTANTE - DIREÇÃO DE ESTILO:

Este NÃO é um site corporativo/institucional. NÃO quero: hero centralizado genérico, cards simétricos com sombra suave, gradientes pastel, tipografia neutra tipo "SaaS B2B", espaçamento excessivo tipo landing page de startup.

Quero a estética de portfólio de criador/editor de vídeo: mais crua, com atitude, assimétrica, com texturas, tipografia grande e expressiva, elementos que se movem e reagem ao scroll/mouse, como se fosse o site de um estúdio criativo ou de um editor de vídeo profissional — não de uma empresa de software.

PALETA DE CORES (usar exatamente estas, nada além):

- Fundo base: #f3eee9 (bege/off-white)

- Verde escuro: #36574a

- Preto/quase preto: #252525

- Verde neon (para acentos/glow): #39FF14 ou #00FF85 — usar SOMENTE em detalhes de destaque (contornos, glow, hover states, sublinhados), nunca como cor de fundo grande

TIPOGRAFIA:

Fonte display grande e com personalidade para títulos (bold, condensada ou com caráter — tipo Neue Montreal, Clash Display, Space Grotesk ou similar, nada de Inter/Roboto genérico). Textos de apoio podem ser mais simples/legíveis.

---

ESTRUTURA DO SITE:

1. HERO

Nome "Vinícius Araújo" em destaque, tagline "UGC Creator". Efeito de glow neon verde pulsante sutil atrás do texto ou contornando elementos-chave. Pode ter vídeo de fundo em loop ou mockup de vídeo com moldura estilo "story" do Instagram.

2. SOBRE

Seção curta e direta, tipografia grande, alinhamento assimétrico (evitar centralizar tudo).

3. ESTEIRA DE MARCAS (MARQUEE)

Logos das marcas com quem já trabalhou, rodando infinitamente na horizontal, velocidade constante, sem parar, com fade sutil nas bordas esquerda/direita. Ao passar o mouse sobre um logo, ele pausa e ganha destaque com glow neon verde.

4. GALERIAS DE VÍDEO POR NICHO

Ordem, nomenclatura e quantidade exata de placeholders (não altere, não renomeie, não junte categorias):

   1. Grupos de Promoção — 12 vídeos

   2. Apps e Serviços — 12 vídeos

   3. Carro e Casa — 4 vídeos

   4. Tech — 8 vídeos

   5. Alimentos e Bebidas — 4 vídeos

   6. Autocuidado — 6 vídeos

   7. Moda — 12 vídeos

   8. Viagens — 4 vídeos

   9. YouTube — 3 vídeos (formato HORIZONTAL 16:9, diferente das demais seções)

   CONTORNO DAS SEÇÕES:

   Cada bloco/seção de nicho (o container que agrupa o título + a grade de vídeos daquele nicho) deve ter um fino contorno neon verde ao redor (border sutil, 1–2px, com leve glow/blur externo tipo box-shadow neon), delimitando visualmente onde cada nicho começa e termina. O contorno deve ser discreto em repouso e intensificar levemente quando a seção entra em foco no scroll.

   Cada seção tem o nome do nicho como título (tipografia display, grande) seguido da grade de vídeos correspondente.

   FRAMES VERTICAIS (todas as seções, EXCETO YouTube):

   - Formato 9:16 (proporção de Reels/TikTok/Stories)

   - Borda fina com contorno neon verde, glow sutil mesmo em repouso, intensificando no hover

   - Cantos levemente arredondados (12–16px)

   - Dentro do frame: placeholder visual (ícone de play centralizado, fundo em tom #252525 ou textura sutil)

   - No hover: leve zoom-in do frame + intensificação do glow neon + ícone de play pulsando

   - Abaixo de cada frame: título curto do vídeo (1 linha) + descrição breve (1–2 linhas)

   - Grade: EXATAMENTE 4 frames por linha em desktop. Última fileira incompleta fica alinhada à esquerda (ex: Carro e Casa, Alimentos e Bebidas e Viagens terão 1 fileira de 4; Autocuidado terá 1 fileira de 4 + 1 fileira de 2)

   FRAMES DA SEÇÃO YOUTUBE (diferente das demais):

   - Formato 16:9 (horizontal, estilo thumbnail de YouTube)

   - Mesmo tratamento visual (borda neon verde, glow, cantos arredondados, hover com zoom + glow)

   - Grade: 3 frames lado a lado em desktop

   - Abaixo de cada frame: título + descrição breve, igual às demais seções

   - Crie os frames como DOIS componentes reutilizáveis: "VideoCardVertical" (9:16) e "VideoCardHorizontal" (16:9, só na seção YouTube), para facilitar a substituição futura dos placeholders pelos vídeos reais.

   - Animação de entrada: scroll reveal (fade + slight translateY) por fileira, com delay escalonado entre cards (efeito cascata). Cada seção revela primeiro o título do nicho, depois a grade.

5. CONTATO / CTA FINAL

Botão com efeito neon verde pulsante (glow contínuo tipo "respiração"), chamando atenção real.

---

ANIMAÇÕES E MOVIMENTO (essencial):

- Marquee horizontal infinito para os logos (CSS animation ou biblioteca tipo react-fast-marquee)

- Scroll reveal em todas as seções (fade + translateY sutil)

- Micro-interações de hover em todos os elementos clicáveis (vídeos, botões, logos) com glow neon verde e leve scale

- Cursor customizado é um plus (círculo que segue o mouse, muda de tamanho sobre elementos clicáveis)

- Efeito de "grão" ou textura sutil de fundo para tirar a cara de "chapado digital"

- Transições suaves entre seções, nada abrupto

REFERÊNCIA DE ATITUDE: pense em portfólios de editores de vídeo/motion designers no Awwwards ou Behance — dinâmico, com personalidade, não em templates de agência de marketing.

OBSERVAÇÃO IMPORTANTE SOBRE OS VÍDEOS: os vídeos ainda serão inseridos manualmente depois. Foque em criar os placeholders/frames bem desenhados e os componentes reutilizáveis, com espaço de texto para título e descrição abaixo de cada um, respeitando exatamente a quantidade de placeholders por nicho especificada acima.

---

COMPORTAMENTO MOBILE (importante — leia com atenção):

NÃO quero um layout responsivo tradicional para mobile (ou seja, não quero que a grade de 4 colunas vire 2 ou 1, não quero que o marquee ou o hero se reorganizem, não quero breakpoints que alterem a disposição dos elementos).

Quero o mesmo comportamento do Canva Sites quando a opção "não redimensionar" está ativada na publicação: a página mantém EXATAMENTE a mesma estrutura, largura e disposição da versão desktop, e em telas menores ela é apenas ESCALADA PROPORCIONALMENTE (zoom out) para caber na largura da tela, mantendo todas as proporções, alinhamentos e a grade de 4 colunas intacta — sem reflow, sem empilhamento, sem esconder elementos.

Implementação sugerida: fixe a largura do container principal (ex: 1440px) e aplique um `transform: scale()` dinâmico via JavaScript (calculando a proporção entre a largura da viewport e a largura fixa do design), ajustando a altura do container com `transform-origin: top left` para não deixar espaço em branco. Alternativamente, usar `<meta name="viewport" content="width=1440">` fixo, deixando o navegador mobile compactar a página inteira, similar ao comportamento do Canva.

O usuário no celular deve ver a MESMA composição visual da versão desktop, apenas em escala reduzida (pode dar zoom/pinch para ler melhor, mas o layout nunca reflui).

Mantenha boa performance (animações leves, sem travar mesmo com o layout escalado no mobile).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://portfoliougcvinicius.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ae42e0a5-de4b-43ae-9f9a-15991eb6e5e2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
