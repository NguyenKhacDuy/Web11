const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

const questionController = require('../controllers/questionController');

router.get('/', (req, res) => {
    try {
        if (questionController.count == 0) {
            console.log("Empty");
        }
        else {
            let random = Math.floor(Math.random() * (questionController.count));
            questionController.findOne((data) => {
                let question = data[random];
                res.render('question', {
                    questionContent: question
                });
            });
        }
    }
    catch (ex) {
        console.log(ex);
    }
});

// router.post('/:id', (req, res) => {
//     try {
//         let questionList = [...fileController.readFileSync('./data.json')];
//         if (req.params.answer == 'yes') {
//             questionList[req.params.id - 1].voteYes++;
//         }
//         if (req.params.answer == 'no') {
//             questionList[req.params.id - 1].voteNo++;
//         }
//         fileController.writeFile('./data.json', questionList, (err) => {
//             if (err) {
//                 console.log(err);
//             }
//             res.redirect('/question/' + req.params.id);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = router;