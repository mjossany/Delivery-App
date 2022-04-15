const { OK } = require('http-status-codes');

module.exports = async (_req, res, next) => {
  try {
    // const { email, password } = req.body;
    res.status(OK).json('oi');
  } catch (err) {
    next(err);
  }
};
