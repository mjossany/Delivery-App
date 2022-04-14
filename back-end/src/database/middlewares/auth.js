const { validateLoginInfos } = require('../functions/checkInfos');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  const validInfos = validateLoginInfos(email, password);
  console.log(validInfos);
  if (validInfos) return next(validInfos);
  return next();
};
