const axios = require('axios');

const fetchWords = async (query) => {
  const options = {
    url: 'https://api.datamuse.com/words',
    params: {
      ml: query,
      max: 20,
    },
  };
  await axios.get(options.url, options);
};

module.exports = fetchWords;
