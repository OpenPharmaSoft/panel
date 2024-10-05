const { getPatients } = require('../models/Patient');

const fetchPatients = async (req, res) => {
  const patients = await getPatients();
  res.json(patients);
};

module.exports = { fetchPatients };