import { Client } from "discord.js";
import { snakeToCamel } from "../utils/camel_case.js";
import { commands } from "../commands/_init.js";
import { SlashCommand } from "../../../types/SlashCommand.js";
import { logger } from "../utils/logger.js";

export async function onAutocomplete(client: Client) {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isAutocomplete()) return;
        const commandName = await snakeToCamel(interaction.commandName);
        const command = commands[commandName as keyof typeof commands] as SlashCommand;

        if (!command) return;
        if (!(typeof command.autocomplete === "function")) return;

        try {
            await command.autocomplete(interaction);
            return;
        } catch (error: any) {
            logger.error('An error happened in "Autocomplete Handler"');
            logger.error(`${error.name} - ${error.message}`);
            return;
        }
    });
}
