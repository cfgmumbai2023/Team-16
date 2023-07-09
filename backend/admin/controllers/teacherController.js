const connection = require('../../config/db');
const { generateToken } = require('../../config/auth');

module.exports = {
    getTeacherById: (req, res) => {
        let teacherId = req.params.teacherId
        connection.query(
            'SELECT * FROM teacher id = ?',
            [teacherId],
            (err, result) => {
                res.json(result[0])
            }
        )
    }
}