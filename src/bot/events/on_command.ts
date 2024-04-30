import { Client } from "discord.js";

export async function onCommand(client: Client) {
    client.on("interactionCreate", (interaction) => {
        if (!interaction.isCommand()) return;

        // Code goes here
    });
}
