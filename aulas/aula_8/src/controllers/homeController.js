exports.homePage = (req, res) => {
  res.render('index');
};

exports.handleForm = (req, res) => {
  console.log(req.body);
  res.send(`
    <h1>Bem Vindo! ${req.body.name}</h1>
  `);
};
