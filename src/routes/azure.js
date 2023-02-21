const express = require('express');
const azureController = require('../controllers/azure');
const authenticateMiddleware = require('../middleware/authenticate');

const router = express.Router();

router.post('/blob', authenticateMiddleware.authenticate, azureController.uploadToAzureBlob);

module.exports = router;
