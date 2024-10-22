const prisma = require("../prisma");
const fs = require("fs");
const { parse } = require("csv-parse");

/** Seeds the database using a file stream */
const seed = async () => {
  const recallParser = fs.createReadStream("src/server/data/Recalls.csv").pipe(
    parse({
      columns: true,
    })
  );

  const incidentParser = fs
    .createReadStream("src/server/data/IncidentReports.csv")
    .pipe(
      parse({
        columns: true,
      })
    );

  for await (const recall of recallParser) {
    await prisma.recall.upsert({
      where: { id: -1 },
      update: {},
      create: {
        title: recall.Title,
        date: recall.Date,
        summary: recall.Summary,
        recallNumber: recall.RecallNumber,
      },
    });
  }

  for await (const incident of incidentParser) {
    await prisma.incident.upsert({
      where: { id: -1 },
      update: {},
      create: {
        reportNumber: incident["Report No."],
        reportDate: incident["Report Date"],
        submitterType: incident["Category of Submitter"],
        productDescription: incident["Product Description"],
        productCategory: incident["Product Category"],
        productSubCategory: incident["Product Sub Category"],
        productType: incident["Product Type"],
        productCode: +incident["Product Code"],
        manufacturer:
          incident["Manufacturer / Importer / Private Labeler Name"],
        brand: incident["Brand"],
        model: String(incident["Model Name or Number"]),
        serialNumber: String(incident["Serial Number"]),
        upc: String(incident["UPC"]),
        retailer: incident["Retailer"],
        purchaseDate: incident["Purchase Date"],
        incidentDescription: incident["Incident Description"],
        state: incident["State"],
        zipcode: +incident["ZIP"],
        severity: incident["(Primary) Victim Severity"],
        victimGender: incident["(Primary) Victim's Gender"],
        victimAge: +incident["(Primary) Victim's Age (years)"],
        companyComment: incident["Company Comments"],
      },
    });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
