/*
  Warnings:

  - You are about to drop the column `progress` on the `UserRecord` table. All the data in the column will be lost.
  - You are about to drop the column `to_next_level` on the `UserRecord` table. All the data in the column will be lost.
  - Made the column `author` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comment` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `page_count` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "author" SET DEFAULT '',
ALTER COLUMN "image_url" SET NOT NULL,
ALTER COLUMN "image_url" SET DEFAULT '',
ALTER COLUMN "comment" SET NOT NULL,
ALTER COLUMN "comment" SET DEFAULT '',
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "page_count" SET NOT NULL,
ALTER COLUMN "page_count" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "UserRecord" DROP COLUMN "progress",
DROP COLUMN "to_next_level";
