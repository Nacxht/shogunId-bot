import { Client, GatewayIntentBits } from "discord.js";
import { botConfig } from "./config/config.js";
import { eventHandlerInit } from "./bot/events/_init.js";
import { commandInit } from "./bot/commands/_init.js";

async function main() {
    // Create new Client instance
    const client: Client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.DirectMessages,
        ],
    });

    // Initializer
    await commandInit(); // Deploy command
    await eventHandlerInit(client); // Event handler

    // Run bot
    client.login(botConfig.token);
}

main();
