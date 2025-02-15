const winston = require("winston");
const path = require("path");
const fs = require("fs");

const logsBaseDir = path.join(__dirname, "../../logs");

if (!fs.existsSync(logsBaseDir)) {
    fs.mkdirSync(logsBaseDir, { recursive: true });
}

const getDailyLogFolder = () => {
    const today = new Date().toISOString().split("T")[0];
    const logDir = path.join(logsBaseDir, today);

    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    return logDir;
};

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),

        new winston.transports.File({
            filename: path.join(getDailyLogFolder(), "app.log"),
        }),

        new winston.transports.File({
            filename: path.join(getDailyLogFolder(), "error.log"),
            level: "error",
        }),
    ],
});

module.exports = logger;
