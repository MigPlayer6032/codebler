const fetch = require('superagent');
const url = require('../../json/apis.json');

module.exports = {
	apis: {
		cat: 'https://cataas.com',
		dog: 'https://dog.ceo/',
		fox: 'https://randomfox.ca/',
		duck: 'https://random-d.uk/'
	},

	dog: async function() {
		const response = await fetch(url.dog);
		return response.body.message;
	},
	cat: async function(type) {
		let tp = type || 'image';

		if (tp === 'image') {
			let caturl = url.cat + '/cat?json=true';
			const response = await fetch(caturl);

			return url.cat + response.body.url;
		} else if (tp === 'gif') {
			let caturl = url.cat + '/cat/gif?json=true';
			const response = await fetch(caturl);

			return url.cat + response.body.url;
		} else {
			return new ReferenceError(`\"${type}\" isn't a valid reference!`);
		}
	},
	fox: async function() {
		const response = await fetch(url.fox);
		return response.body.image;
	},
	duck: async function() {
		const response = await fetch(url.duck);
		return response.body.url;
	}
};
