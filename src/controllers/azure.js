const azureIntegration = require('../integration/azure');

exports.uploadToAzureBlob = function(req, res, next) {
  const { container, blobName, data } = req.body;

  azureIntegration.uploadToAzureBlob(container, blobName, data)
    .then(() => {
      res.status(200).send('File uploaded to Azure Blob Storage successfully');
    })
    .catch(err => {
      next(err);
    });
};
