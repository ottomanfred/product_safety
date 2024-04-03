const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

/** 10 recalls paginated */
router.get("/recalls/:page", async (req, res, next) => {
  try {
    const page = +req.params.page;
    const recalls = await prisma.recall.findMany({
      skip: 10 * page - 10,
      take: 10,
    });
    res.json(recalls);
  } catch (err) {
    next(err);
  }
});

router.get("/recalls/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const recall = await prisma.recall.findUnique({ where: { id } });
    res.json(recall);
  } catch (err) {
    next(err);
  }
});

router.get("/incidents/:page", async (req, res, next) => {
  try {
    const page = +req.params.page;
    const incidents = await prisma.incident.findMany({
      skip: 10 * page - 10,
      take: 10,
    });
    res.json(incidents);
  } catch (err) {
    next(err);
  }
});

router.get("/incidents/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const incident = await prisma.incident.findUnique({ where: { id } });
    res.json(incident);
  } catch (err) {
    next(err);
  }
});

/** User must be logged in to access their incident reports and make new reports. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});

router.get("/user", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const user = await prisma.user.findUnique({ where: { id } });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/user/incidents", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const incidents = await prisma.incident.findMany({ where: { userId: id } });
    res.json(incidents);
  } catch (err) {
    next(err);
  }
});

router.post("/incidents", async (req, res, next) => {
  try {
    const id = res.locals.user.id;
    const incident = await prisma.incident.create({
      data: {
        userId: id,
        reportNumber: req.body.reportNumber,
        reportDate: req.body.reportDate,
        submitterType: req.body.submitterType,
        productDescription: req.body.productDescription,
        productCategory: req.body.productCategory,
        productSubCategory: req.body.productSubCategory,
        productType: req.body.productType,
        productCode: req.body.productCode,
        manufacturer: req.body.manufacturer,
        brand: req.body.brand,
        model: req.body.model,
        serialNumber: req.body.serialNumber,
        upc: req.body.upc,
        retailer: req.body.retailer,
        purchaseDate: req.body.purchaseDate,
        incidentDescription: req.body.incidentDescription,
        state: req.body.state,
        zipcode: req.body.zipcode,
        severity: req.body.severity,
        victimGender: req.body.victimGender,
        victimAge: req.body.victimAge,
        companyComment: req.body.companyComment,
      },
    });
    res.json(incident);
  } catch (err) {
    next(err);
  }
});
