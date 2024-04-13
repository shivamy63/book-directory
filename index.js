const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./books');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Add your routes here
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
