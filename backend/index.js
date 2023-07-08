const express = require('express');
const app = express();
const authRoutes = require('./admin/routes/authRoutes');
const studentRoutes = require('./admin/routes/studentRoutes')

app.use(express.json());
app.use('/login', authRoutes);
app.use('/student', studentRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
