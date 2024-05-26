import { SlashCommandBuilder } from "discord.js";
import { helpAutocompleteController, helpController } from "../controller/help_controller.js";

export const help = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help command")
        .addStringOption((option) =>
            option
                .setName("command")
                .setDescription("Get detail of specific command")
                .setAutocomplete(true)
        )
        .setDMPermission(false),

    autocomplete: helpAutocompleteController,
    execute: helpController,
};
