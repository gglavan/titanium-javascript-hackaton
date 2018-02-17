const Lesson = require('../models/Lesson');
const Task = require('../models/Task');


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
    if (err) {
      res.status(500).json({ error: err });
    }
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

exports.getLesson = async(req, res) => {
  const id = req.params.id;
  try {
    let lesson = await Lesson.findById(id).exec();
    console.log(lesson)
    let tasks = await Task.find({
      lessonId: lesson._id
    }).exec();
    console.log(tasks)
    res.render('lessons/lesson', {
      'lesson': lesson,
      'tasks': tasks 
    });
  } catch(err) {
    res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
  }
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
