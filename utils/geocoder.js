const nodeGeoCoder = require('node-geocoder');

const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter: 'https',
    apikey: process.env.GEOCODER_API_KEY,
    formatter: null
}

const geocoder = nodeGeoCoder(options);
module.exports = geocoder;