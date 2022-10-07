const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    const query = `SELECT ${req.params.id} FROM movies`;
    pool.query(query)
    .then( result => {
        res.send(result.description)
    })
    .catch(error => {
        console.log('ERROR: GET description', error);
        res.sendStatus(500)
    })
});

module.exports = router;