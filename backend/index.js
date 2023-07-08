const express = require('express');
const app = express();
const authRoutes = require('./admin/routes/authRoutes');
// const teacherAuthRoutes = require('./teacher/routes/authRoutes');
// const teacherDashboardRoutes = require('./teacher/routes/dashboardRoutes');

app.use(express.json());
app.use('/login', authRoutes);
// app.use('/teacher/auth', teacherAuthRoutes);
// app.use('/teacher/dashboard', teacherDashboardRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
