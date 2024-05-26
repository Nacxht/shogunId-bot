import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import {
    banController,
    kickController,
    purgeController,
    timeoutController,
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

export const timeout = {
    data: new SlashCommandBuilder()
        .setName("timeout")
        .setDescription("Timeout a member in your server")
        .addUserOption((option) =>
            option.setName("target").setDescription("The member to timeout").setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("time")
                .setDescription("How long member will be timeout'ed")
                .setRequired(true)
                .setChoices(
                    { name: "30 Minutes", value: "30m" },
                    { name: "1 Hour", value: "1h" },
                    { name: "1 Day", value: "1d" },
                    { name: "1 Week", value: "7d" },
                    { name: "20 Days", value: "20d" }
                )
        )
        .addStringOption((option) => option.setName("reason").setDescription("Timeout reason"))
        .setDefaultMemberPermissions(
            PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers
        )
        .setDMPermission(false),

    execute: timeoutController,
};
