const { INVALID_EMAIL_FORMAT, INVALID_PASSWORD_LENGTH } = require('../errors');

const validateEmail = (email) => {
  const regexEmail = /^[\w_\-.]+@[a-z]+\.[a-z]+(\.[a-z]{2,4})?$/;
  const validEmail = regexEmail.test(email);
  if (!validEmail) return INVALID_EMAIL_FORMAT;
  return null;
};

const validatePassword = (password) => {
  if (password.length < 6) return INVALID_PASSWORD_LENGTH;
  return null;
};

const validateLoginInfos = (email, password) => {
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  if (validEmail || validPassword) return (validEmail || validPassword);
  return null;
};

module.exports = {
  validateLoginInfos,
};
