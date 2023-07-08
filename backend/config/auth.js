const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Change this to a secure key in production

module.exports = {
  generateToken: (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
  },
  verifyToken: (token) => {
    return jwt.verify(token, secretKey);
  },
};
