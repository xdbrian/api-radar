const express = require('express');
const {addStudent, 
       getAllStudents, 
       getStudent,
       updateStudent,
       deleteStudent
      } = require('../controllers/studentController');

const {addRadar, 
        getAllRadars, 
        getRadar,
        updateRadar,
        deleteRadar
       } = require('../controllers/radarController');


const router = express.Router();

router.post('/radar', addRadar);
router.get('/radars', getAllRadars);
router.get('/radar/:id', getRadar);
router.put('/radar/:id', updateRadar);
router.delete('/student/:id', deleteRadar);

router.post('/student', addStudent);
router.get('/students', getAllStudents);
router.get('/student/:id', getStudent);
router.put('/student/:id', updateStudent);
router.delete('/student/:id', deleteStudent);


module.exports = {
    routes: router
}