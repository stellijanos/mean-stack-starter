const Test = require('../models/Test');

const getAll = async () => {
    return await Test.find();
}

module.exports = {
    getAll
}
