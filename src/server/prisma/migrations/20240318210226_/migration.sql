/*
  Warnings:

  - You are about to alter the column `upc` on the `Incident` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Incident" (
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
    "upc" BIGINT,
    "retailer" TEXT NOT NULL,
    "purchaseDate" TEXT NOT NULL,
    "incidentDescription" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER,
    "severity" TEXT NOT NULL,
    "victimGender" TEXT NOT NULL,
    "victimAge" INTEGER,
    "companyComment" TEXT NOT NULL,
    CONSTRAINT "Incident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Incident" ("brand", "companyComment", "id", "incidentDescription", "manufacturer", "model", "productCategory", "productCode", "productDescription", "productSubCategory", "productType", "purchaseDate", "reportDate", "reportNumber", "retailer", "serialNumber", "severity", "state", "submitterType", "upc", "userId", "victimAge", "victimGender", "zipcode") SELECT "brand", "companyComment", "id", "incidentDescription", "manufacturer", "model", "productCategory", "productCode", "productDescription", "productSubCategory", "productType", "purchaseDate", "reportDate", "reportNumber", "retailer", "serialNumber", "severity", "state", "submitterType", "upc", "userId", "victimAge", "victimGender", "zipcode" FROM "Incident";
DROP TABLE "Incident";
ALTER TABLE "new_Incident" RENAME TO "Incident";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
