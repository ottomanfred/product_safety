/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Task";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Incident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER,
    "reportNumber" TEXT NOT NULL,
    "reportDate" TEXT NOT NULL,
    "submitterType" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCategory" TEXT NOT NULL,
    "productSubCategory" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productCode" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "upc" INTEGER NOT NULL,
    "retailer" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "incidentDescription" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "severity" TEXT NOT NULL,
    "victimGender" TEXT NOT NULL,
    "victimAge" INTEGER NOT NULL,
    "companyComment" TEXT NOT NULL,
    CONSTRAINT "Incident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recall" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "recallNumber" INTEGER NOT NULL
);
