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
});

/**
 * PUT route 
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const newColorFeedback = req.body.colorFeedback;
  const newTextFeedback = req.body.textFeedback;
  const feedbackId = req.params.id;
  const userId = req.user.id;

  const sqlQuery = `
  UPDATE "feedbacks"
    SET "color_feedback"=$1, "text_feedback"=$2
    WHERE "id"=$3
      AND "user_id"=$4
      `
  const sqlValues = [newColorFeedback, newTextFeedback, feedbackId, userId];

  pool.query(sqlQuery, sqlValues)
   .then((dbRes) => {
    res.sendStatus(200);
   })
   .catch((dbErr) => {
    console.log('PUT /api/feedbacks/:id failed:', dbErr);
    res.sendStatus(500);
   })
})

module.exports = router;
