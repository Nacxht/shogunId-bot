import { Client } from "discord.js";
import { logger } from "../utils/logger.js";

export async function onReady(client: Client) {
    client.on("ready", (client) => {
        logger.info(`Logged in as ${client.user.tag} - ${client.user.id}`);
    });
}
