const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const path = require('path');
const sequelize = require('./util/db');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
sequelize.sync().then(() => {
    app.listen(4000, () => {
    });
}).catch(err => {
    console.log(err)
})
