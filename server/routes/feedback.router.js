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
// router.post('/', rejectUnauthenticated, (req, res) => {
//   const colorFeedback = req.body.color
//   const textFeedback = req.body.text
//   const userId = req.user.id 
//   console.log('This is req.body', req.body);

//   const sqlValues = [colorFeedback, textFeedback, userId]
//   const sqlQuery = `
//   INSERT INTO feedbacks 
//   (color_feedback, text_feedback, user_id)
//   VALUES ($1, $2, $3);
//   `
//   pool.query(sqlQuery, sqlValues)
//    .then(dbRes => {
//     console.log('successfully created feedback!', dbRes);
//     res.sendStatus(201)
//    }).catch(dbErr => {
//     console.log('Error connecting/Posting to DB:', dbErr);
//    })
// });

module.exports = router;
