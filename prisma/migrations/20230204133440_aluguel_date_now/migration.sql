-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluguel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDevolucao" DATETIME,
    "valorArrecadado" DECIMAL,
    "clienteId" INTEGER NOT NULL,
    "livroId" INTEGER NOT NULL,
    CONSTRAINT "Aluguel_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Aluguel_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Aluguel" ("clienteId", "data", "dataDevolucao", "id", "livroId", "valorArrecadado") SELECT "clienteId", "data", "dataDevolucao", "id", "livroId", "valorArrecadado" FROM "Aluguel";
DROP TABLE "Aluguel";
ALTER TABLE "new_Aluguel" RENAME TO "Aluguel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
