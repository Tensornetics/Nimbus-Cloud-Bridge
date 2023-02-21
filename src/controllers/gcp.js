const gcpIntegration = require('../integration/gcp');

exports.uploadToGCS = function(req, res, next) {
  const { bucket, filename, data } = req.body;

  gcpIntegration.uploadToGCS(bucket, filename, data)
    .then(() => {
      res.status(200).send('File uploaded to GCS successfully');
    })
    .catch(err => {
      next(err);
    });
};
