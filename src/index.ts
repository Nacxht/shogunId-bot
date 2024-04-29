import { Client, GatewayIntentBits } from "discord.js";
import { botConfig } from "./config/config.js";

// Create new Client instance
const client: Client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages],
});

// Initializer
/*
    Code goes here
*/

// Run bot
client.login(botConfig.token);
