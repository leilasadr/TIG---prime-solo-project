const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

/**
 * GET route 
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  pool.query(`SELECT * FROM "feedbacks";`)
   .then(dbRes => {
    res.send(dbRes.rows);
   }).catch(dbErr => {
    console.log('Error connecting/Getting to DB:', dbErr);
   })
});

/**
 * POST route 
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const colorFeedback = req.body.colorFeedback
  const textFeedback = req.body.textFeedback
  const userId = req.user.id 
  console.log('This is req.body', req.body);

  const sqlValues = [colorFeedback, textFeedback, userId]
  const sqlQuery = `
  INSERT INTO feedbacks 
  (color_feedback, text_feedback, user_id)
  VALUES ($1, $2, $3);
  `
  pool.query(sqlQuery, sqlValues)
   .then(dbRes => {
    console.log('successfully created feedback!', dbRes);
    res.sendStatus(201)
   }).catch(dbErr => {
    console.log('Error connecting/Posting to DB:', dbErr);
   })
});

/**
 * DELETE route 
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const idToDelete = req.params.id;
  const sqlQuery = `
  DELETE FROM "feedbacks" WHERE id = $1;
  `
  console.log('The idToDelete is:', idToDelete);
  pool.query(sqlQuery, [idToDelete])
    .then(dbRes => {
      res.sendStatus(200)
    }).catch(dbErr => {
      console.log('Error connecting to DB', dbErr);
    })
})

module.exports = router;
