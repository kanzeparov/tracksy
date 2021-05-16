// importing express framework
const express = require("express");
const app = express();
const router= require('./routes')
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

// listen to port 7000 by default
app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is running at por1t ${7000}}`);
});

module.exports = app;
