const fetch = require('superagent');

function xbox(message, header) {
	let hdr = header || 'ACHIEVEMENT UNLOCKED!';
	if (message === null || message === undefined || message === ' ') {
		return new ReferenceError('Please place a message!');
	}

	return encodeURI(
		`http://www.achievement-maker.com/xbox/${message}?header=${hdr}.png`
	);
}

module.exports = {
	xbox
};
