module.exports = (req, res, next) => {
  res.locals.teste = 'Este valor é da variável local';
  next();
};
