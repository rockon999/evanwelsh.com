const bodyParser = require('body-parser');
const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

if (process.env.environment === 'production') {
  console.log('Production environment detected, enforcing HTTPS & SSL.');
  console.log(`Environment: ` + process.env.environment);

  const enforce = require('express-sslify');
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(history());

app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/blog')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
