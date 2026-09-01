# Revisão responsiva mobile do portfólio

## Objetivo
Transformar a versão mobile em uma adaptação responsiva real do desktop, preservando integralmente identidade, componentes, ordem e linguagem visual. A aparência desktop a partir de 768px permanecerá inalterada.

## Implementação

### 1. Remover a miniaturização global somente no mobile
- Desativar o comportamento de escala fixa de 1440px abaixo de 768px e manter o fluxo normal do documento nesse intervalo.
- Preservar o comportamento atual do wrapper em tablet/desktop para não alterar a composição aprovada.
- Manter o controle global que garante apenas um vídeo ativo por vez.

### 2. Hero e navegação superior
- Converter a barra superior em faixa horizontal rolável, preservando cores e estilo, sem comprimir todos os nichos simultaneamente.
- Reorganizar o Hero em coluna no mobile: posicionamento, nome, texto, diferenciais, ações e imagem com presença proporcional.
- Aplicar título principal fluido entre 32px e 48px, texto de apoio de 16px, labels com mínimo legível e alvos sociais de pelo menos 48px.
- Manter o CTA “Ver portfólio” legível e confortável para toque.

### 3. Marcas, Sobre e métricas
- Manter a esteira contínua e os círculos existentes, com logos grandes o suficiente para leitura e saindo pelas extremidades da tela.
- Ajustar “Me conheça” para imagem primeiro e texto abaixo, ambos usando praticamente toda a largura útil.
- Preservar as métricas e vídeos de engajamento, adaptando o grid para uma coluna com mídia de destaque e textos legíveis.

### 4. Portfólio, feedbacks e vídeos
- Manter a navegação horizontal dos nichos e a organização atual dos vídeos.
- Adaptar a galeria para uma coluna em telas estreitas, com vídeos ocupando a largura útil e mantendo seus aspect ratios.
- Preservar o facade do YouTube, `preload="none"` e a regra de um único player ativo.
- Manter o carrossel de feedbacks, aumentando cartões e evitando que sejam miniaturizados.

### 5. Processo, investimentos, pacotes e contato
- Preservar a timeline e ampliar tipografia, marcadores, largura útil e ritmo vertical no mobile.
- Preservar as três colunas lado a lado em Investimentos conforme decisão anterior, usando padding mínimo, gaps reduzidos e tipografia legível.
- Preservar exatamente o design dos cards de Pacotes, alterando apenas largura, padding, gap e empilhamento responsivo.
- Ajustar formulário e dados de contato para largura total, labels com mínimo de 12px e controles com área de toque confortável.

### 6. Ritmo, estabilidade e acessibilidade
- Normalizar paddings laterais para 16–20px e espaçamentos verticais por contexto, removendo vazios causados pela escala global sem criar novos estilos.
- Garantir que imagens mantenham proporção, `object-fit` correto e dimensões estáveis.
- Manter pinch-to-zoom nativo, reduzir efeitos caros somente quando necessário no mobile e respeitar redução de movimento.
- Preservar foco visível, semântica, textos alternativos e alvos de toque adequados.

## Validação
- Comparar desktop antes/depois para confirmar ausência de mudança visual.
- Testar em 320, 360, 375, 390, 414 e 430px, verificando overflow horizontal, legibilidade, imagens, marquees, troca de nicho, reprodução de vídeo, popup e rolagem até o rodapé.
- Verificar build, console e erros de runtime após a implementação.

## Detalhes técnicos
- A causa principal é o `FixedScale`: ele renderiza uma superfície de 1440px e aplica escala proporcional no celular, fazendo fontes e controles virarem miniaturas e tornando breakpoints dependentes da largura interna de 1440px.
- A correção será condicionada a `<768px`, usando layout CSS responsivo normal; não serão usados `transform: scale()`, `zoom` ou uma segunda árvore visual para mobile.
- Alterações serão concentradas nos componentes existentes e em variantes mobile, sem criar uma identidade paralela.
