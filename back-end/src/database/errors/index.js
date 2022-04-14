const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const INVALID_EMAIL_FORMAT = {
  status: BAD_REQUEST,
  message: 'The email must follow the pattern <email>@<mainDomain>.<genericDomain>',
};

const INVALID_PASSWORD_LENGTH = {
  status: BAD_REQUEST,
  message: 'Password must have at least 6 characters',
};

module.exports = {
  INVALID_EMAIL_FORMAT,
  INVALID_PASSWORD_LENGTH,
};
