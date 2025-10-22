const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

db.sequelize.sync().then(() => {
    console.log('Database connected my lord');
})

const patientRoutes = require('./routes/patient');
app.use('/patient', patientRoutes);

// const factureRoutes = require('./routes/facture');
// app.use('/facture', factureRoutes);

// const praticienRoutes = require('./routes/praticien');
// app.use('/praticien', praticienRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})