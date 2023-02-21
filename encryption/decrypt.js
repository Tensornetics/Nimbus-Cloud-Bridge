const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'MySecretKey12345';

exports.decrypt = function(iv, encryptedData) {
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  const decrypted = decipher.update(encryptedData, 'hex', 'utf8') + decipher.final('utf8');
  return decrypted;
}
