const path = require('path');
require('module-alias/register');

require('module-alias').addAliases({
  '@': path.join(__dirname, 'src'),
});
