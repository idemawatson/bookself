/*
  Warnings:

  - Added the required column `description` to the `TrophyMaster` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrophyMaster" ADD COLUMN     "description" TEXT NOT NULL;
