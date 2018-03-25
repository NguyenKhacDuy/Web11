const questionSchema = require('../models/questionSchema');

let create = (question) =>{
    let newQuestion = {
        questionContent: question
    }
    questionSchema.create(newQuestion);
};

let findOne = (callback) => {
    questionSchema.findOne((err,data) => {
        if (err)
            console.log(err);
        callback(data);        
    });
}

let count = (callback) => {
    questionSchema.count((err,data) => {
        if (err)
            console.log(err);
        callback(data); 
    })
}

let findById = (id, callback) => {
    questionSchema.findById(id, (err, data) => {
        if (err)
            console.log(err);
        callback(data);
    })
}

let vote = (id, answer, callback) => {
    if (answer == 'yes') {
        questionSchema.findById(id, (data) => {
            questionSchema.findByIdAndUpdate(id, {voteYes: data.voteYes + 1}, (err) => {
                console.log(err);
            })
        })
    }
    if (answer == 'no') {
        questionSchema.findById(id, (data) => {            
            questionSchema.findByIdAndUpdate(id, {voteNo: data.voteNo + 1}, (err) =>{
                console.log(err);
            })
        })
    }
}

module.exports = {
    create,
    findOne,
    vote,
    count,
    findById
}