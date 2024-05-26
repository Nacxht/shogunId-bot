import { SlashCommandBuilder } from "discord.js";
import {
    avatarController,
    pingController,
    userInfoController,
} from "../controller/misc_controller.js";

export const ping = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription(`Replies with "Pong!: and check bot latency`),

    execute: pingController,
};

export const info = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription(`Get information about about \`user\` / \`server\``)
        .addSubcommand((subcommand) =>
            subcommand
                .setName("user")
                .setDescription("Get information about the targeted user")
                .addUserOption((option) =>
                    option.setName("target").setDescription("The user to check").setRequired(true)
                )
        )
        .addSubcommand((subcommand) =>
            subcommand.setName("server").setDescription("Get information about this server")
        )
        .setDMPermission(false),

    execute: userInfoController,
};

export const avatar = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription(`Get user avatar`)
        .addUserOption((option) =>
            option.setName("target").setDescription("The user to check").setRequired(true)
        )
        .setDMPermission(false),

    execute: avatarController,
};
