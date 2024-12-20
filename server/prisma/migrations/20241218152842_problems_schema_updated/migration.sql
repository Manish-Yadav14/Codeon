/*
  Warnings:

  - A unique constraint covering the columns `[problemId]` on the table `Problems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Problems_problemId_key" ON "Problems"("problemId");
