const testRepository = require('../repositories/testRepository');

const getAll = async() => {
    try {   
        return await testRepository.getAll()
    } catch (err) {
        throw new Error(`Error fetching tests: ${err.message}`);
    }
}

module.exports = {
    getAll
}