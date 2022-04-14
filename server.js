const express = require('express');
const apiRoutes = require('./routes/apiRoutes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes.js');

const PORT = process.env.PORT || 3001;
const app = express();

//allow files in the public folder to be static resources and able to be accessed
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data & put it in req
app.use(express.json());

//api endpoint navigation
app.use('/api', apiRoutes);
//webpage endpoint navigation
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})