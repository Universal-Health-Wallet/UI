const router = require('./router.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
app.use('/static', express.static("static"), express.static("public"));
router.default(app);

app.listen(port, host, () => {
  console.log('Server started at', host, ':', port);
});
