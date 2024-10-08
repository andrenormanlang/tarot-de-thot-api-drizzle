CREATE TABLE IF NOT EXISTS "tarot_de_thot" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"número_significado" text NOT NULL,
	"descrição_curta" text NOT NULL,
	"descrição_longa" text,
	"URL_da_imagem" text,
	"planeta_governante" text,
	"zodíaco" text,
	"árvore_da_vida" text,
	"atributos" text[],
	"elemento" text,
	"significados_positivos" text[],
	"significados_negativos" text[],
	"significado_reverso" text,
	"conselho" text,
	"pergunta" text,
	"confirmação" text,
	"determinação" text[],
	"palavras_chave" text[],
	"revelação" text
);
