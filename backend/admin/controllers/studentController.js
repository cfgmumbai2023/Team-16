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
                'SELECT school_id, CLASS_NAME FROM teacher WHERE id = ?',
                [teach],
                (err, result) => {
                    let school = result[0].school_id
                    let clas = result[0].CLASS_NAME
                    connection.query(
                        'SELECT * FROM student WHERE school_id = ? AND class = ?',
                        [school, clas],
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
    },
    createStudent: (req, res) => {
        const student = req.body
        student.child_id = makeId(8)
        connection.query(
            'DESCRIBE student',
            (err, result) => {
                const columns = result.map(result => result.Field);
                const insertColumns = columns.join(', ');
                const insertData = columns.map(column => student[column]).join(', ');
                connection.query(
                    `INSERT INTO student (${insertColumns}) VALUES (${insertData})`,
                    (er, resul) => {
                        res.json("Op vai")
                    }
                )
            }
        )
    }
}

function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}