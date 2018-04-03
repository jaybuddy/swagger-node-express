if (process.env.NODE_ENV === 'development') {
  const fs = require('fs');
  if (fs.existsSync('.env')) {
    require('dotenv').config();
  }
}

require('babel-register');
require('./server');
