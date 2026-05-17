exports.homePage = (req, res) => {
  res.render('home', { title: 'Welcome Home' });
};

exports.aboutPage = (req, res) => {
  res.render('about', { title: 'About Me' });
};