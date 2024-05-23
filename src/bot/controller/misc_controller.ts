import { CommandInteraction } from "discord.js";

export async function pingController(interaction: CommandInteraction) {
    const sent = await interaction.reply({ content: "Pinging...", fetchReply: true });

    return interaction.editReply({
        content: `Pong!\nWebsocket Heartbeat: ${interaction.client.ws.ping}\nRoundtrip Latency: ${
            sent.createdTimestamp - interaction.createdTimestamp
        }ms`,
    });
}
