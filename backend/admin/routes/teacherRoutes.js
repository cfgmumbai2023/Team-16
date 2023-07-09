const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController')

router.get('/:teacherId', teacherController.getTeacherById)
router.post("/", teacherController.createTeacher)

module.exports = router;