const express = require('express');
const app = express();
const authRoutes = require('./admin/routes/authRoutes');
const studentRoutes = require('./admin/routes/studentRoutes')
const teacherRoutes = require('./admin/routes/teacherRoutes')
var cors = require('cors');

app.use(express.json());
app.use(cors({ origin : [ "http://localhost:3000"]}));
app.use('/login', authRoutes);
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
