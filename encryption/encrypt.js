const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'MySecretKey12345';
const iv = crypto.randomBytes(16);

exports.encrypt = function(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };
}
