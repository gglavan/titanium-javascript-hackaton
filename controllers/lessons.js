exports.getLessons = (req, res) => {

    res.render('/lessons', {
        title: 'Lessons'
    });
};