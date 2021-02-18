exports.homePage = (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="name" />
      <button>Enviar</button>
    </form>
  `);
};

exports.handleForm = (req, res) => {
  console.log(req.body);
  res.send(`
    <h1>Bem Vindo! ${req.body.name}</h1>
  `);
};
