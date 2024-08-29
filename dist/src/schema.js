"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartasTarot = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.cartasTarot = (0, pg_core_1.pgTable)('tarot_de_thot', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    nome: (0, pg_core_1.text)('nome').notNull(),
    número_significado: (0, pg_core_1.text)('número_significado').notNull(),
    descrição_curta: (0, pg_core_1.text)('descrição_curta').notNull(),
    descrição_longa: (0, pg_core_1.text)('descrição_longa'),
    url_da_imagem: (0, pg_core_1.text)('url_da_imagem'),
    planeta_governante: (0, pg_core_1.text)('planeta_governante'),
    zodíaco: (0, pg_core_1.text)('zodíaco'),
    árvore_da_vida: (0, pg_core_1.text)('árvore_da_vida'),
    atributos: (0, pg_core_1.text)('atributos').array(),
    elemento: (0, pg_core_1.text)('elemento'),
    significados_positivos: (0, pg_core_1.text)('significados_positivos').array(),
    significados_negativos: (0, pg_core_1.text)('significados_negativos').array(),
    significado_reverso: (0, pg_core_1.text)('significado_reverso'),
    conselho: (0, pg_core_1.text)('conselho'),
    pergunta: (0, pg_core_1.text)('pergunta'),
    confirmação: (0, pg_core_1.text)('confirmação'),
    determinação: (0, pg_core_1.text)('determinação').array(),
    palavras_chave: (0, pg_core_1.text)('palavras_chave').array(),
    revelação: (0, pg_core_1.text)('revelação'),
});
