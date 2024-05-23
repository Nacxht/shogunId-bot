import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import {
    banController,
    kickController,
    purgeController,
} from "../controller/moderation_controller.js";

export const kick = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick member from your server")
        .addUserOption((option) =>
            option.setName("target").setDescription("The member to kick").setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("reason").setDescription("The reason for kicking")
        )

        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),

    execute: kickController,
};

export const ban = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban member from your server")
        .addUserOption((option) =>
            option.setName("target").setDescription("The member to ban").setRequired(true)
        )
        .addStringOption((option) =>
            option.setName("reason").setDescription("The reason for banning").setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),

    execute: banController,
};

export const purge = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Bulk delete messages")
        .addNumberOption((option) =>
            option
                .setName("value")
                .setDescription("The value of messages to delete")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(false),

    execute: purgeController,
};
