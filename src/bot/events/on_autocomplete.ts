import { Client } from "discord.js";

export async function onAutocomplete(client: Client) {
    client.on("interactionCreate", (interaction) => {
        if (!interaction.isAutocomplete()) return;

        // Code goes here
    });
}
