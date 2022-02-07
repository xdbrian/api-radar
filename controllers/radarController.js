'use strict';

const firebase = require('../db');
const Radar = require('../models/radar');
const firestore = firebase.firestore();


const addRadar = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('radars').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllRadars = async (req, res, next) => {
    try {
        const radars = await firestore.collection('radars');
        const data = await radars.get();
        const radarArray = [];
        if(data.empty) {
            res.status(404).send('No radar record found');
        }else {
            data.forEach(doc => {
                const radar = new Radar(
                    doc.id,
                    doc.data().title,
                    doc.data().data,
                );
                radarArray.push(radar);
            });
            res.send(radarArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRadar = async (req, res, next) => {
    try {
        const id = req.params.id;
        const radar = await firestore.collection('radars').doc(id);
        const data = await radar.get();
        if(!data.exists) {
            res.status(404).send('Radar with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateRadar = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const radar =  await firestore.collection('radars').doc(id);
        await radar.update(data);
        res.send('Radar record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRadar = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('radars').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addRadar,
    getAllRadars,
    getRadar,
    updateRadar,
    deleteRadar
}