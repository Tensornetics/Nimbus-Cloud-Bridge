const azure = require('azure-storage');

const blobService = azure.createBlobService();

exports.uploadToAzureBlob = function(container, blobName, data) {
  return new Promise((resolve, reject) => {
    blobService.createBlockBlobFromText(container, blobName, data, (err, result, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
