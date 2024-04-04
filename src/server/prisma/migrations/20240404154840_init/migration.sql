-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "reportNumber" TEXT,
    "reportDate" TEXT,
    "submitterType" TEXT,
    "productDescription" TEXT NOT NULL,
    "productCategory" TEXT,
    "productSubCategory" TEXT,
    "productType" TEXT,
    "productCode" INTEGER,
    "manufacturer" TEXT,
    "brand" TEXT NOT NULL,
    "model" TEXT,
    "serialNumber" TEXT,
    "upc" TEXT,
    "retailer" TEXT,
    "purchaseDate" TEXT,
    "incidentDescription" TEXT NOT NULL,
    "state" TEXT,
    "zipcode" INTEGER,
    "severity" TEXT,
    "victimGender" TEXT,
    "victimAge" INTEGER,
    "companyComment" TEXT,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recall" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "recallNumber" TEXT,

    CONSTRAINT "Recall_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
