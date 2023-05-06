/*
  Warnings:

  - You are about to drop the column `totalPages` on the `UserRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserRecord" DROP COLUMN "totalPages",
ADD COLUMN     "progress" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "to_next_level" INTEGER NOT NULL DEFAULT 50,
ADD COLUMN     "total_pages" INTEGER NOT NULL DEFAULT 0;
