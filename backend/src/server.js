const app = require('./app');
const config = require('./config/env');
const { connectToDatabase } = require('./config/db');
const logger = require('./utils/logger');

connectToDatabase()
    .then(() => {

        const PORT = config.app.port;
        const ENV = config.app.env;
        const APP_URI = config.app.uri;

        app.listen(PORT, () => {
            logger.info(`Server is running at ${APP_URI} in ${ENV} environment on port ${PORT} ...`)
        });

    })