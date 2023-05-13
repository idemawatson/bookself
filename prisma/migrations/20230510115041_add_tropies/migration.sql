-- CreateTable
CREATE TABLE "Trophies" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trophies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trophies_id_key" ON "Trophies"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trophies_rank_key" ON "Trophies"("rank");

-- CreateIndex
CREATE UNIQUE INDEX "Trophies_user_id_code_key" ON "Trophies"("user_id", "code");

-- AddForeignKey
ALTER TABLE "Trophies" ADD CONSTRAINT "Trophies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("sub") ON DELETE RESTRICT ON UPDATE CASCADE;
