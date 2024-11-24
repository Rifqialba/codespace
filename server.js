const express = require('express');
const app = express();
const port = 3000;


const logger = require('./middleware/logger');
app.use(logger);


app.use(express.json());


const itemRoutes = require('./route/itemRoute');
app.use('/items', itemRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
