const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController')

router.get('/:teacherId', teacherController.getTeacherById)

module.exports = router;