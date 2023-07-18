const mongoose = require('mongoose');

// connecting to mongoDB and create a db called codeWizardsFinalProject
mongoose.connect('mongodb://127.0.0.1/codeWizardsFinalProject')
  .then(() => {
    console.log('You are connected to the DB');
  })
  .catch(error => console.log(error));


module.exports = mongoose.connection