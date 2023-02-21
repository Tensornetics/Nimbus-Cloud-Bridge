const express = require('express');
const gcpController = require('../controllers/gcp');
const loggerMiddleware = require('../middleware/logger');

const router = express.Router();

router.post('/gcs', loggerMiddleware.logger, gcpController.uploadToGCS);

module.exports = router;
