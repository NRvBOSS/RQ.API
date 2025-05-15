/*
  Warnings:

  - You are about to drop the column `userId` on the `Quiz` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Quiz` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Quiz" DROP CONSTRAINT "Quiz_userId_fkey";

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "Quiz_title_key" ON "Quiz"("title");
