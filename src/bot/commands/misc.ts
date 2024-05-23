import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import { pingController } from "../controller/misc_controller.js";

export const ping = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription(`Replies with "Pong! and check bot latency"`),

    execute: pingController,
};
