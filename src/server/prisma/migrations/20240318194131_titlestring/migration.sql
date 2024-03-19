-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recall" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "recallNumber" INTEGER NOT NULL
);
INSERT INTO "new_Recall" ("date", "id", "recallNumber", "summary", "title") SELECT "date", "id", "recallNumber", "summary", "title" FROM "Recall";
DROP TABLE "Recall";
ALTER TABLE "new_Recall" RENAME TO "Recall";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
