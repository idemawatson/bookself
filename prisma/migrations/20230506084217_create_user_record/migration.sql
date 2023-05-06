-- CreateTable
CREATE TABLE "UserRecord" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "totalPages" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRecord_id_key" ON "UserRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserRecord_user_id_key" ON "UserRecord"("user_id");

-- AddForeignKey
ALTER TABLE "UserRecord" ADD CONSTRAINT "UserRecord_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("sub") ON DELETE RESTRICT ON UPDATE CASCADE;
