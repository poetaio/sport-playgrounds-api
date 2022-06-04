require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { errorHandlingMiddleware } = require('./middleware');
const apiRouter = require('./routes');
const sequelize = require('./models/sequelize');
const { httpStatusCodes } = require('./utils');
require("./models");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);
app.use(errorHandlingMiddleware);
app.use('*', (req, res) => { res.status(httpStatusCodes.NOT_FOUND).end() });

const run = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    } catch (e) {
        console.error(e);
    }
};

run();
