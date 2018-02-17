const Lesson = require('../models/Lesson');

exports.getLessons = (req, res) => {
    Lesson.find()
        .exec()
        .then(docs => console.log(docs))
        .catch(err => {
            res.status(500).json({
                error:err
            });
        });

    res.render('lessons/lessons', {
        title: 'Lessons'
    });
};



