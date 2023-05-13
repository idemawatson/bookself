/*
  Warnings:

  - You are about to drop the column `code` on the `Trophies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Trophies` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `Trophies` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,trophy_id]` on the table `Trophies` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trophy_id` to the `Trophies` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Trophies_rank_key";

-- DropIndex
DROP INDEX "Trophies_user_id_code_key";

-- AlterTable
ALTER TABLE "Trophies" DROP COLUMN "code",
DROP COLUMN "name",
DROP COLUMN "rank",
ADD COLUMN     "trophy_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TrophyMaster" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rank" TEXT NOT NULL,

    CONSTRAINT "TrophyMaster_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrophyMaster_id_key" ON "TrophyMaster"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trophies_user_id_trophy_id_key" ON "Trophies"("user_id", "trophy_id");

-- AddForeignKey
ALTER TABLE "Trophies" ADD CONSTRAINT "Trophies_trophy_id_fkey" FOREIGN KEY ("trophy_id") REFERENCES "TrophyMaster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
