# API Thot Tarot 🔮

Este projeto é uma API RESTful para gerenciar um banco de dados de cartas Thot Tarot. Ele é construído com TypeScript, Express.js e Drizzle ORM, conectando-se a um banco de dados PostgreSQL. 🚀

## Recursos ✨

- Buscar todas as cartas do Tarot de Thot 📚
- Buscar uma única carta de Tarot de Thot por ID 🃏
- Adicionar uma nova carta de Tarot de Thot ➕
- Inserir várias cartas do Tarot de Thot de uma vez 📥
- Atualizar detalhes de uma carta de tarot ✏️
- Excluir uma carta de tarot 🗑️

## Pré-requisitos 📋

- Node.js (v14 ou posterior) 💻
- npm (v6 ou posterior) 📦
- Banco de dados PostgreSQL 🐘

## Configuração 🛠️

1. Clone o repositório:

```bash
   git clone https://github.com/andrenormanlang/thot-tarot-api.git
   cd thot-tarot-api
   ```

2. Instale as dependências:

```bash
   npm install
   ```

3. Configure suas variáveis :
Crie um arquivo `.env` no diretório raiz e adicione sua string de conexão de banco de dados:

```bash
   DATABASE_URL=postgres://username:password@localhost:5432/your_database
```

4. Execute as migrações do banco de dados:

```bash
   npm run generate
   npm run migrate
   ```

5. Inicie o servidor:

```bash
   npm run dev
   ```

O servidor agora deve estar em funcionando em `http://localhost:3000`. 🎉

## Esquema do Banco de Dados 📊

A tabela `tarot_de_thot` tem a seguinte estrutura:

- `id`: Serial (Chave Primária)
- `url_da_imagem`: VARCHAR(500)
- `nome`: VARCHAR(255)
- `descrição_curta`: VARCHAR(1000)
- `descrição_longa`: VARCHAR(1000)
- `zodíaco`: JSONB
- `elemento`: VARCHAR(50)
- `número_significado`: Serial
- `significados`: JSONB
- `conselho`: VARCHAR(500)
- `pergunta`: VARCHAR(500)
- `confirmação`: VARCHAR(500)
- `determinação`: JSONB
- `palavras_chave`: JSONB
- `revelação`: VARCHAR(500)
- `planeta_governante`: VARCHAR(50)
- `árvore_da_vida`: VARCHAR(50)
- `atributos`: JSONB
- `significados_positivos`: JSONB
- `significados_negativos`: JSONB
- `significado_reverso`: VARCHAR(500)

## Endpoints da API 🛣️

### GET /api/cartas

Busca todas as cartas de tarô.

### GET /api/cartas/:id

Busca uma única carta de tarô por ID.

### POST /api/cartas

Adiciona uma nova carta de tarô.

Exemplo do corpo da solicitação:

```json
{
        "nome": "O Louco",
        "número_significado": "0 como nada e começo de tudo",
        "descrição_curta": "O Louco geralmente é retratado como um mendigo ou um vagabundo, usa roupas e meias irregulares sem sapatos, e carrega um graveto nas costas. Ele simboliza a verdadeira inocência, um estado perfeito de alegria e liberdade, o sentimento seguro de ser um com o espírito da vida a qualquer momento.",
        "descrição_longa": "O louco é o símbolo da verdadeira inocência, um estado perfeito de alegria e liberdade, a sensação de ser um com o espírito da vida, a qualquer momento. O louco tem o número 0, para alguém pronto para ir em qualquer direção, aberto para todas as possibilidades.Ele não pertence a algum lugar, não tem passado, mas um futuro infinito.Cada momento é um novo começo.Nas letras árabes, o 0 tem a forma de um ovo, o símbolo da origem da vida.O louco é a mudança, o movimento e a prontidão para pular para a vida, sem cuidados nunca.O louco não conhece a diferença entre possibilidade e realidade, o zero significa uma total falta de esperança e medo, o louco suspeita e não planeja nada.Ele reage diretamente à situação atual, nada é calculado, nada está oculto. Na maioria dos baralhos, o louco é mostrado com um animal, como um símbolo da natureza, a alma animal em perfeita harmonia com o espírito que apenas segue seus instintos.O louco é coragem, otimismo e crença na vida e em si mesmo.Quando os tempos são difíceis e sofremos a pressão de 'ser razoável' ou negar nossos instintos, o que nos lembra que nossa pessoa interior sabe melhor o que fazer. Em seu aspecto negativo, o cartão pode dizer que suas qualidades estão bloqueadas ou revertidas.Irresponsabilidade, projetos loucos, imprudência - o humano descuidado que se cobre com alguma loucura artificial, por desconfiar de seus instintos e temer parada e silêncio. Além disso, confie em seus instintos",
        "url_da_imagem": "https://res.cloudinary.com/dytiufsuu/image/upload/v1724869722/thot_tarot/00-The_Fool_fkip0b.jpg",
        "planeta_governante": "Urano / Mercúrio",
        "zodíaco": "Peixes/Áries",
        "árvore_da_vida": "Kether vai para Chokmah",
        "atributos": [
            "curiosidade",
            "espontaneidade",
            "loucura"
        ],
        "elemento": "Ar",
        "significados_positivos": [
            "o rompimento positivo de estruturas e limitações",
            "idealismo altruísta",
            "fantasia sem fim",
            "otimismo",
            "Confie em instintos",
            "começo",
            "inocência"
        ],
        "significados_negativos": [
            "perda negativa de estruturas",
            "acordo inútil",
            "infantilidade"
        ],
        "significado_reverso": "O louco revertido pode mostrar que você está assumindo muitos riscos e satisfeito de forma imprudente.Na sua tentativa de viver 'no momento' e ser espontâneo e aventureiro, você pode fazê-lo em total desrespeito às consequências de suas ações e se envolver em atividades que coloca você e outras pessoas em risco.Olhe para o quadro geral e considere como você pode manter o espírito livre do louco sem deficiências os outros.",
        "conselho": "Você está pronto para um novo começo, talvez para uma mudança de qualidade.Deixe -se ir, faça uma pausa, mesmo que o medo tente segurá -lo de novo e de novo.Confie na voz do seu coração.",
        "pergunta": "O que você precisa fazer para se livrar disso?Qual é o papel do 'tigre do medo' em sua vida?Como você imagina o salto ousado para algo novo?Onde está seu coração chamado?",
        "confirmação": "Agora estou apoiando as sugestões do meu coração. Estou aberto e vou para onde você pode me levar.",
        "determinação": [
            "mudanças",
            "movimento",
            "a inocência de uma criança",
            "espontaneidade",
            "Espírito Livre",
            null
        ],
        "palavras_chave": [
            "abertura",
            "confiar",
            "assumir riscos",
            "lealdade a nós mesmos",
            "liberdade",
            "independência",
            "criatividade",
            "desempenho",
            "salto",
            "Acompanhamento do coração"
        ],
        "revelação": null
    }
```

## PUT /api/cartas/:id

Atualiza uma carta de tarô existente.

## DELETE /api/cartas/:id

Exclui uma carta de tarô.

## POST /api/cartas/muitas

Insere várias cartas de tarô de uma vez.

Exemplo do corpo da solicitação:

```json
[
  {
     {
        "nome": "O Louco",
        "número_significado": "0 como nada e começo de tudo",
        "descrição_curta": "O Louco geralmente é retratado como um mendigo ou um vagabundo, usa roupas e meias irregulares sem sapatos, e carrega um graveto nas costas. Ele simboliza a verdadeira inocência, um estado perfeito de alegria e liberdade, o sentimento seguro de ser um com o espírito da vida a qualquer momento.",
        "URL da imagem": "https://res.cloudinary.com/dytiufsuu/image/upload/v1724869722/thot_tarot/00-The_Fool_fkip0b.jpg",
         "elemento": "Ar",
        "significados_positivos": [
            "o rompimento positivo de estruturas e limitações",
            "idealismo altruísta",
            "fantasia sem fim",
            "otimismo",
            "Confie em instintos",
            "começo",
            "inocência"
        ],
      "...."
  },
   {
      "nome": "O Mago",
      "número_significado": "1 como símbolo para a unidade (masculino)",
      "descrição_curta": "O mágico simboliza a ilusão, a habilidade, a autoconsciência e um estilo de vida ativo.",      
      "url_daimagem": "https://res.cloudinary.com/dytiufsuu/image/upload/v1724869725/thot_tarot/01-TheMagus_iud8e8.jpg",        
      "significados_positivos": [
         "Atividade",
         "poder da vida",
         "impulso",
         "energia",
         "Manifestação",
         "desenvoltura"
      ],
      "..."       
   }
  
]
```

## Tratamento de erros ⚠️

A API usa códigos de status HTTP padrão para respostas de erro:

- 400: Solicitação inválida
- 404: Não encontrado
- 500: Erro interno do servidor

As mensagens de erro incluem um JSON body com um campo da `mensagem` descrevendo o erro.

## Contribua! 🤝

Contribuições são bem-vindas! Sinta-se à vontade para enviar uma solicitação de pull.
