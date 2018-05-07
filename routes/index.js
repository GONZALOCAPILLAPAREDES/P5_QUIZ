const express = require('express');
const router = express.Router();
var quizController = require('../controllers/quiz');

/* GET de la pagina de inicio */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*GET de los credits*/
router.get('/credits', (req, res, next) => {
    res.render('credits');
});

/*GET de los quizzes*/
router.get('/quizzes',quizController.index);

module.exports = router;
