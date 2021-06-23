const { createLogger, format, transports } = require('winston');
let requestObj = require('request')
let j = requestObj.jar()

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console()
    ]
})

exports.logger = logger
