const awsIntegration = require('../integration/aws');

exports.uploadToS3 = function(req, res, next) {
  const { bucket, key, data } = req.body;

  awsIntegration.uploadToS3(bucket, key, data)
    .then(() => {
      res.status(200).send('File uploaded to S3 successfully');
    })
    .catch(err => {
      next(err);
    });
};
