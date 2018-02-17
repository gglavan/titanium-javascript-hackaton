const Lesson = require('../models/Lesson');

exports.getAdmin = (req, res) => {
  res.render('admin/admin', {
    title: 'Admin'
  });
};

exports.getLessonForm  = (req, res) => {
  res.render('admin/lesson-form', {
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
    //console.log('Lesson saved');
      res.redirect('/admin');
  });
};