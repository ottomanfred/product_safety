/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Recall` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Recall_title_key" ON "Recall"("title");
