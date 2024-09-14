require('dotenv').config();
const getLocalCommands = require('../../utils/misc/getLocalCommands');
const getApplicationCommands = require('../../utils/misc/getApplicationCommands');
const areCommandsDifferent = require('../../utils/misc/areCommandsDifferent');

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(client, process.env.TEST_ID);

        for (const localCommand of localCommands) {
            const {name, description, options} = localCommand;

            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === name
            );
            if (existingCommand) {
                /*
                await applicationCommands.delete(existingCommand.id);
                console.log("Command: " + name + " deleted successfully!");
            }
                */
                if (localCommand.deleted) {
                    await applicationCommands.delete(existingCommand.id);
                    console.log("Command: " + name + " deleted successfully!");
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });
                
                    console.log("Command: " + name + " edited successfully!");
                }
            } else {
                if(localCommand.deleted) {
                    console.log("Skipping Registering command " + name + " as it's set to delete.");
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                })

                console.log("Command: " + name + " registered successfully!");
            }
        }
    } catch (error) {
        console.log(error);
    }
}