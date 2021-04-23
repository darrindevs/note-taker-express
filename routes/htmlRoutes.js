// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests
  
  // user can visit home 
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
 // user can visit notes page
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
