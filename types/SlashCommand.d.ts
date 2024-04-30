import { AutocompleteInteraction, CommandInteraction, InteractionResponse, SlashCommandBuilder } from "discord.js";

export interface SlashCommand {
    data: Omit<SlashCommandBuilder, any>;
    autocomplete?(interaction: AutocompleteInteraction): Promise<void>;
    execute(interaction: CommandInteraction): Promise<InteractionResponse>;
}
