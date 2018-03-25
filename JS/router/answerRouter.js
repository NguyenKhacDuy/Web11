const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');
const router = express.Router();

const questionController = require('../controllers/questionController');

// router.get('/question/:id', (req, res) => {
//     let questionList = [...fileController.readFileSync('./data.json')];
//     let id = req.params.id - 1;
//     console.log(questionList[id]);
//     res.render('questionInfo', {     
//             id: id,
//             question: questionList[id].questionContent,
//             voteYes: questionList[id].voteYes,
//             voteNo: questionList[id].voteNo
//     });
// });

// router.get('/:id/:answer', (req, res) => {
//         let questionList = [...fileController.readFileSync('./data.json')];
//         let id = req.params.id - 1;
//         console.log(questionList[id]);
//         res.render('question', {     
//                 id: id,
//                 question: questionList[id].questionContent,
//                 voteYes: questionList[id].voteYes,
//                 voteNo: questionList[id].voteNo
//         });
//     });

    router.post('/:id/:answer', (req, res) => {
        try {
            let id = req.params.id;
            let answer = req.params.answer;
            questionController.vote(id, answer, (err) => {
                console.log(err);
            });
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/:id/:answer', (req, res) => {
        try {
            // let questionList = [...fileController.readFileSync('./data.json')];
            let id = req.params.id;
            let question = questionController.findOne(id, (err, data) => {
                if (err)
                    console.log(err);
                callback(data);
            });
        
            res.render('question', {
                question: question,
                totalVotes: question.voteYes + question.voteNo,
                percentYes: ((question.voteYes*100) / (question.voteNo + question.voteYes)).toFixed(2),
                percentNo: ((question.voteNo*100) / (question.voteNo + question.voteYes)).toFixed(2),
            });
        } catch (error) {
            console.log(error);
        }
    })

module.exports = router;