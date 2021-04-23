// Load data - link routes to data sources 
const notes = require('../db/db.json');
const fs = require('fs');

// Routing 

module.exports = (app) => {
  // API GET Requests
  app.get('/api/notes', (req, res) => res.json(notes));

  // API POST Requests
  // user submits a form and thus submits data to the server.
  app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    notes.push(req.body);
    res.json(true);
  });

};
