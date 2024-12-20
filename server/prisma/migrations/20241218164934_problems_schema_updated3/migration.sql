/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Problems` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Problems_problemId_key";

-- AlterTable
ALTER TABLE "Problems" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Problems_slug_key" ON "Problems"("slug");
