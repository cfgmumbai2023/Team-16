// app/admin/controllers/authController.js
const bcrypt = require('bcrypt');
const connection = require('../../config/db');
const { generateToken } = require('../../config/auth');

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;

    connection.query(
      'SELECT * FROM users WHERE email = ?',
      [email],
      (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
          const user = results[0];
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              const token = generateToken({ userId: user.id });
              res.json({ token });
            } else {
              res.status(401).json({ message: 'Invalid email or password' });
            }
          });
        } else {
          res.status(401).json({ message: 'Invalid email or password' });
        }
      }
    );
  },
};
