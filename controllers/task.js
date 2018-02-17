const Task = require('../models/Task');

exports.getTaskForm  = (req, res) => {
  res.render('tasks/task-form', {
    title: 'Admin-task'
  });
};

exports.postTaskForm  = (req, res) => {
  // const task = new Task({
  //   lessonId: req.body.lessonId,
  //   name: req.body.name,
  //   description: req.body.description,
  //   test: req.body.test
  // });

  Task.create({
    lessonId: req.body.lessonId,
    name: req.body.name,
    description: req.body.description,
    test: req.body.test
  }, (err) => {
    if (err) { 
      res.status(500).json({ error: err });
      return
    }
    console.log('Task saved')
      res.redirect('/admin');
  });
};
exports.getTask = (req, res) => {
    const id = req.params.id;
    Lesson.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                console.log(doc)
                res.render('tasks/task', {
                    'task': doc
                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};