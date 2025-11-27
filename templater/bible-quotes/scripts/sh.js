/* Source: https://forum.obsidian.md/t/templater-system-commands-file-lists-weather-and-git/36197
*/

module.exports = async function sh(cmd) {
	const { promisify } = require("util");
	const exec = promisify(require("child_process").exec);
	const result = await exec(cmd);
	return { out: result.stdout.trim(), err: result.stderr.trim() };
}

