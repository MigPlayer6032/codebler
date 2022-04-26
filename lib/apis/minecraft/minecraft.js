const { server } = require('./server');
const { minecraft } = require('../../json/apis.json');

module.exports = {
	api: minecraft,
	server: server
};
