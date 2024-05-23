import { REST, Routes } from "discord.js";
import { botConfig } from "../../config/config.js";
import { logger } from "../utils/logger.js";

// List of commands
import * as miscCommand from "./misc.js";
import * as moderationCommand from "./moderation.js";

export const commands = Object.assign({}, miscCommand, moderationCommand);
const commandsData = Object.values(commands).map((command) => command.data);

export async function commandInit() {
    const rest: REST = new REST({ version: "10" }).setToken(botConfig.token);

    try {
        logger.info("Started refreshing application (/) commands");

        await rest.put(Routes.applicationGuildCommands(botConfig.clientId, botConfig.guildId), {
            body: commandsData,
        });

        logger.info("Successfully reloaded application (/) commands");
    } catch (error: any) {
        logger.error("Failed to reload application (/) commands");
        logger.error(`${error.name} - ${error.message}`);
    }
}
