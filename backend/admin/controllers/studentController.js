const connection = require('../../config/db');

module.exports = {
    getStudents: (req, res) => {
        let teach = req.query.teacher
        if(!teach) {
            connection.query(
                'SELECT * FROM student',
                [],
                (err, result) => {
                    res.json(result)
                }
            )
        }
        else {
            connection.query(
                'SELECT school_id FROM teacher WHERE id = ?',
                [teach],
                (err, result) => {
                    let school = result[0].school_id
                    connection.query(
                        'SELECT * FROM student WHERE school_id = ?',
                        [school],
                        (er, re) => {
                            res.json(re)
                        }
                    )
                }
            )
        }
    },
    getStudentById: (req, res) => {
        let id = req.params.studentId
        connection.query(
            'SELECT * FROM student WHERE child_id = ?',
            [id],
            (err, result) => {
                res.json(result[0])
            }
        )
    }
}