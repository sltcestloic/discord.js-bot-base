const { promisify } = require('util');
const { glob } = require('glob');
const pGlob = promisify(glob);

module.exports = async client => {
    (await pGlob(`${process.cwd()}/commands/*.js`)).map(async commandFile => {
        const command = require(commandFile);
        console.log('registered ' + command.name);
        client.commands.set(command.name, command);
    })
}