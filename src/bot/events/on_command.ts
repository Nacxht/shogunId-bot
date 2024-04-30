import { Client } from "discord.js";
import { snakeToCamel } from "../utils/camel_caser.js";
import { commands } from "../commands/_init.js";
import { SlashCommand } from "../../../types/SlashCommand.js";
import { logger } from "../utils/logger.js";

export async function onCommand(client: Client) {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isCommand()) return;
        const commandName = await snakeToCamel(interaction.commandName);
        const command = commands[commandName as keyof typeof commands] as SlashCommand;

        if (!command) {
            logger.warn(`No commands matching ${interaction.commandName} was found`);
            return;
        }

        try {
            await command.execute(interaction);
            return;
        } catch (error: any) {
            logger.error('An error happened in "Command Handler"');
            logger.error(`${error.name} - ${error.message}`);
            return;
        }
    });
}
