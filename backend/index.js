const express = require('express');
const app = express();
const adminAuthRoutes = require('./admin/routes/authRoutes');
const adminDashboardRoutes = require('./admin/routes/dashboardRoutes');
// const teacherAuthRoutes = require('./teacher/routes/authRoutes');
// const teacherDashboardRoutes = require('./teacher/routes/dashboardRoutes');

app.use(express.json());
app.use('/admin/auth', adminAuthRoutes);
app.use('/admin/dashboard', adminDashboardRoutes);
// app.use('/teacher/auth', teacherAuthRoutes);
// app.use('/teacher/dashboard', teacherDashboardRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
