// boiler plate server.js
const express =  require('express');
const connection = require('./config/connection');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(routes);


connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
});