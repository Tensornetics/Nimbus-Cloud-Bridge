const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

exports.uploadToGCS = function(bucket, filename, data) {
  return new Promise((resolve, reject) => {
    const file = storage.bucket(bucket).file(filename);

    const stream = file.createWriteStream({
      metadata: {
        contentType: 'application/octet-stream'
      }
    });

    stream.on('error', err => {
      reject(err);
    });

    stream.on('finish', () => {
      resolve();
    });

    stream.end(data);
  });
};
