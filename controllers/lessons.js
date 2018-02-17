exports.getLessons = (req, res) => {
    res.render('lessons', {
        title: 'Lessons'
    });
};

// exports.postLessons = (req, res) => {
//     req.postLessons();
//     res.redirect('/');
// };