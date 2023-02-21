const express = require('express');
const awsRoutes = require('./aws');
const gcpRoutes = require('./gcp');
const azureRoutes = require('./azure');

const router = express.Router();

router.use('/aws', awsRoutes);
router.use('/gcp', gcpRoutes);
router.use('/azure', azureRoutes);

module.exports = router;
