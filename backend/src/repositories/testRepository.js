const Test = require('../models/test');

const getAll = async () => {
    return await Test.find();
}

module.exports = {
    getAll
}
