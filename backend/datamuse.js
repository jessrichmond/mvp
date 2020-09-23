const axios = require('axios');

const fetchWords = async (query, callback) => {
  const options = {
    url: 'https://api.datamuse.com/words',
    params: {
      ml: query,
      max: 20
    }
  }
}

return await axios.get(options.url, options)

module.exports.fetchWords = fetchWords;