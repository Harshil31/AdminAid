const express = require('express')
const {
    createPatient,
    getPatients,
    getPatient,
    deletePatient,
    updatePatient
} = require('../controllers/patientController')

const router = express.Router()

// get all patients
router.get('/', getPatients)

// get single patient
router.get('/:id', getPatient)

// post a new patient
router.post('/', createPatient)

// delete a patient
router.delete('/:id', deletePatient)

// update a patient
router.patch('/:id', updatePatient)

module.exports = router