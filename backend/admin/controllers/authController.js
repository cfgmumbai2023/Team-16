// app/admin/controllers/authController.js
const connection = require('../../config/db');
const { generateToken } = require('../../config/auth');

module.exports = {
  adminLogin: (req, res) => {
    const { email, password } = req.body;

    connection.query(
      'SELECT * FROM admin WHERE email = ?',
      [email],
      (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
          const user = results[0];
          if (password === user.password) {
            const token = generateToken({ userId: user.id });
            res.json({ token, user });
          } else {
            res.status(401).json({ message: 'Invalid email or password' });
          }
        } else {
          res.status(401).json({ message: 'Invalid email or password' });
        }
      }
    );
  },
    teacherLogin: (req, res) => {
        const { email, password } = req.body;

        connection.query(
            'SELECT * FROM teacher WHERE email = ?',
            [email],
            (error, results) => {
                if (error) throw error;

                if (results.length > 0) {
                    const user = results[0];
                    if (password === user.password) {
                        const token = generateToken({ userId: user.id });
                        res.json({ token, user });
                    } else {
                        res.status(401).json({ message: 'Invalid email or password' });
                    }
                } else {
                    res.status(401).json({ message: 'Invalid email or password' });
                }
            }
        );
    },
};
