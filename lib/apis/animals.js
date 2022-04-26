const fetch = require('superagent');
const url = require('../json/apis.json');
const chalk = require('chalk');

function deprecated(message) {
	console.log(chalk.green('[nampis] ') + chalk.yellow(message));
}

async function dog() {
	deprecated('The dog() method is deprecated. use animals.dog()');
	const response = await fetch(url.dog);
	return response.body.message;
}

async function fox() {
	deprecated('The fox() method is deprecated. use animals.fox()');
	const response = await fetch(url.fox);
	return response.body.image;
}

async function duck() {
	deprecated('The duck() method is deprecated. use animals.duck()');
	const response = await fetch(url.duck);
	return response.body.url;
}

async function cat(type) {
	deprecated('The cat() method is deprecated. use animals.cat()');
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
}

module.exports = {
	cat,
	dog,
	fox,
	duck
};
