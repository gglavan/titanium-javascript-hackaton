exports.getDetailTask  = (req, res) => {
  res.render('tasks/detail_task', {
    title: 'Admin-task'
  });
};