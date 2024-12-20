/*
  Warnings:

  - Changed the type of `input` on the `Testcases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `output` on the `Testcases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Testcases" DROP COLUMN "input",
ADD COLUMN     "input" JSONB NOT NULL,
DROP COLUMN "output",
ADD COLUMN     "output" JSONB NOT NULL;
