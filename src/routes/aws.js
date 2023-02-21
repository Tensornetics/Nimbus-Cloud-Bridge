const express = require('express');
const awsController = require('../controllers/aws');
const authenticateMiddleware = require('../middleware/authenticate');

const router = express.Router();

router.post('/s3', authenticateMiddleware.authenticate, awsController.uploadToS3);

module.exports = router;
