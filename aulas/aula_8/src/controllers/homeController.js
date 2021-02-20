exports.homePage = (req, res) => {
  res.render('index', {
    title: 'Este é o título',
    numbers: [0, 1, 2, 3, 4, 5],
  });
  return;
};

exports.handleForm = (req, res) => {
  console.log(req.body);
  return;
};
