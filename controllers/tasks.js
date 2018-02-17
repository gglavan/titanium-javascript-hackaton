const Lesson = require('../models/Task');


exports.getTaskForm  = (req, res) => {
  res.render('task/task-form', {
    title: 'Admin-task'
  });
};

exports.postTaskForm  = (req, res) => {
  const task = new Tasks({
    name: req.body.name,
    description: req.body.description,
    test: req.body.test
  });

  lesson.save((err) => {
    if (err) { return next(err); }
    console.log('Task saved')
      res.redirect('/admin');
  });
};