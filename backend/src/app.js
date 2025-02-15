const express = require('express');
const path = require('path');

const { notFoundMiddleware } = require('./middleware/notFoundMiddleware');
const { errorHandleMiddleware } = require('./middleware/errorHandleMiddleware');
const apiRoutes = require('./routes/apiRoutes');
const requestLogger = require('./utils/requestLogger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(requestLogger);

app.use('/api', apiRoutes, errorHandleMiddleware, notFoundMiddleware);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/frontend', 'index.html'));
});

module.exports = app;
