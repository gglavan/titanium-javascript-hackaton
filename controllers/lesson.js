const Lesson = require('../models/Lesson');

exports.getAdmin = (req, res) => {
    res.render('lessons/admin', {
        title: 'Admin'
    });
};

exports.getLessonForm  = (req, res) => {
    res.render('lessons/lesson-form', {
        title: 'Admin'
    });
};

exports.postLessonForm  = (req, res) => {
    const lesson = new Lesson({
        name: req.body.name,
        description: req.body.description
    });

    lesson.save((err) => {
        if (err) { return next(err); }
        console.log('Lesson saved')
        res.redirect('/admin');
    });
};

exports.getLessons = (req, res) => {
    Lesson.find()
        .exec()
        .then(docs => {
            res.render('lessons/lessons', {
                'lessonList': docs
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
};