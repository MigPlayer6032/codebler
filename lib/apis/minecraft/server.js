const fetch = require('superagent');
const { minejava, minebedrock } = require('../../utils/url');

module.exports = {
	server: {
		java: async function(ip, options) {
			if (!ip || typeof ip !== 'string')
				return new ReferenceError(
					'[INVALID SERVER] An invalid server was passed.'
				);
			if (!options)
				return new ReferenceError('[INVALID OPTIONS] Options were not passed');

			let server = ip.toLowerCase();
			let response = await fetch(minejava + server);
			let info = response.body;

			if (info.online === false && info.debug.ping === false) return '404';
			switch (options.toLowerCase()) {
				case 'hostname':
					return info.hostname;
				case 'ip':
					return info.ip;
				case 'version':
					return info.version;
				case 'protocol':
					return info.protocol;
				case 'port':
					return info.port;
				case 'players':
					return info.players.online;
				case 'playersMax':
					return info.players.max;
				default:
					return '406';
			}
		},

		bedrock: async function(ip, port, options) {
			if (!ip || typeof ip !== 'string')
				return new ReferenceError(
					'[INVALID SERVER] An invalid server was passed.'
				);

			if (port === String && port === Number)
				return new ReferenceError('[INVALID PORT] An invalid port was passed.');

			if (!options)
				return new ReferenceError('[INVALID OPTIONS] Options were not passed');

			let server = ip.toLowerCase();
			let bedrock = minebedrock + server + ':' + port;
			let response = await fetch(bedrock);
			let info = response.body;

			if (info.online === false && info.debug.ping === false) return '404';
			switch (options.toLowerCase()) {
				case 'hostname':
					return info.hostname;
				case 'ip':
					return info.ip;
				case 'version':
					return info.version;
				case 'protocol':
					return info.protocol;
				case 'port':
					return info.port;
				case 'players':
					return info.players.online;
				case 'playersMax':
					return info.players.max;
				default:
					return '406';
			}
		}
	}
};
/*
auto: async function(ip, port, options) {
			if (!ip || typeof ip !== 'string')
				return new ReferenceError(
					'[INVALID SERVER] An invalid server was passed.'
				);

			if (!port || (port === String && port === Number))
				return new ReferenceError('[INVALID PORT] An invalid port was passed.');

			if (!options)
				return new ReferenceError('[INVALID OPTIONS] Options were not passed');

			let server = ip.toLowerCase();
			let response = await fetch(minejava + server);
			let info = response.body;

			if (!info.online) {
				let bedrock = minebedrock + server + ':' + port;

				let res = await fetch(bedrock);
				let infos = res.body;
				console.log(infos.players.max)
				if (infos.online === false && infos.debug.ping === false) return '404';
				switch (options.toLowerCase()) {
					case 'hostname':
						return infos.hostname;
					case 'ip':
						return infos.ip;
					case 'version':
						return infos.version;
					case 'protocol':
						return infos.protocol;
					case 'port':
						return infos.port;
					case 'players':
						return infos.players.online;
					case 'playersMax':
						return infos.players.max;
					default:
						return '406';
				}
			} else {
				switch (options.toLowerCase()) {
					case 'hostname':
						return infos.hostname;
					case 'ip':
						return infos.ip;
					case 'version':
						return infos.version;
					case 'protocol':
						return infos.protocol;
					case 'port':
						return infos.port;
					case 'players':
						return infos.players.online;
					case 'playersMax':
						return infos.players.max;
					default:
						return '406';
				}
			}
		}
*/
