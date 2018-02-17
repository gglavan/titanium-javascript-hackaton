exports.getLessons = (req, res) => {

    res.render('lessons/lessons', {
        title: 'Lessons'
    });
};
