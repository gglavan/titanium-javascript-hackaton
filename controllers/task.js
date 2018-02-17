const Task = require('../models/Task');

exports.getTaskForm  = (req, res) => {
  res.render('tasks/task-form', {
    title: 'Admin-task'
  });
};

exports.postTaskForm  = (req, res) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description,
    test: req.body.test
  });

  task.save((err) => {
    if (err) { return next(err); }
    console.log('Task saved')
      res.redirect('/admin');
  });
};