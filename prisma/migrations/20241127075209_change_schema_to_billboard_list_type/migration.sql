-- DropIndex
DROP INDEX "Billboard_storeId_key";

-- CreateIndex
CREATE INDEX "Billboard_storeId_idx" ON "Billboard"("storeId");
