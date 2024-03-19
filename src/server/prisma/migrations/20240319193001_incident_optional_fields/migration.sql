-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Incident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    CONSTRAINT "Incident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Incident" ("brand", "companyComment", "id", "incidentDescription", "manufacturer", "model", "productCategory", "productCode", "productDescription", "productSubCategory", "productType", "purchaseDate", "reportDate", "reportNumber", "retailer", "serialNumber", "severity", "state", "submitterType", "upc", "userId", "victimAge", "victimGender", "zipcode") SELECT "brand", "companyComment", "id", "incidentDescription", "manufacturer", "model", "productCategory", "productCode", "productDescription", "productSubCategory", "productType", "purchaseDate", "reportDate", "reportNumber", "retailer", "serialNumber", "severity", "state", "submitterType", "upc", "userId", "victimAge", "victimGender", "zipcode" FROM "Incident";
DROP TABLE "Incident";
ALTER TABLE "new_Incident" RENAME TO "Incident";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
