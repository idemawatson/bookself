/*
  Warnings:

  - You are about to drop the `TrophyMaster` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trophies" DROP CONSTRAINT "Trophies_trophy_id_fkey";

-- DropTable
DROP TABLE "TrophyMaster";
