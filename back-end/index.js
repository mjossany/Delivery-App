const http = require('http').createServer(require('./src/api/app'));

const { PORT = 3001 } = process.env;

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
