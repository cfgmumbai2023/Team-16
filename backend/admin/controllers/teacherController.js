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
    },
    createTeacher: (req, res) => {
        const teacher = req.body
        teacher.id = makeId(8)
        connection.query(
            'DESCRIBE teacher',
            (err, result) => {
                const columns = result.map(result => result.Field);
                const insertColumns = columns.join(', ');
                const insertData = columns.map(column => teacher[column]).join(', ');
                connection.query(
                    `INSERT INTO teacher (${insertColumns}) VALUES (${insertData})`,
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