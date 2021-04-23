//* Dependencies
    //* Require Express
const express = require('express');

// * Set up the express app 
const app = express();
// * Set our port to 5000
const PORT = process.env.PORT || 5000;

//* Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//* Define the route for HTML
app.use('/', require('./routes/routes-html'));
//* Define the route for API
app.use('/api/notes', require('./routes/routes-api'));

//* Start the server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });