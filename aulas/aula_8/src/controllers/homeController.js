exports.homePage = (req, res, next) => {
  res.render('index');
};

exports.handleForm = (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Bem Vindo! ${req.body.name}</h1>
  `);
};
