/*
  Warnings:

  - You are about to drop the `Trophies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trophies" DROP CONSTRAINT "Trophies_user_id_fkey";

-- DropTable
DROP TABLE "Trophies";

-- CreateTable
CREATE TABLE "Trophy" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "trophy_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trophy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trophy_id_key" ON "Trophy"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trophy_user_id_trophy_id_key" ON "Trophy"("user_id", "trophy_id");

-- AddForeignKey
ALTER TABLE "Trophy" ADD CONSTRAINT "Trophy_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("sub") ON DELETE RESTRICT ON UPDATE CASCADE;
