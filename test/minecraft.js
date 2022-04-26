const { minecraft } = require('../lib/index');

async function test() {
	console.log(await minecraft.server.java('hypixel.net', 'hostname'));
	console.log(
		await minecraft.server.bedrock('play.mcfx.org', 19132, 'hostname')
	);
}
test();
