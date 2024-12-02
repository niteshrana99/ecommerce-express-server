-- CreateTable
CREATE TABLE "Billboard" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,

    CONSTRAINT "Billboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Billboard_storeId_key" ON "Billboard"("storeId");
