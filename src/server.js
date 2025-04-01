const app = require('./app')
require('module-alias/register');
const path = require('path');

// Register alias dynamically
require('module-alias').addAliases({
  '@': path.join(__dirname, 'src')
});

// Start our app!
app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});