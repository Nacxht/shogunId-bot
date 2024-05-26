import { AutocompleteInteraction, CommandInteraction, EmbedBuilder } from "discord.js";
import { helpComponent } from "../components/help_components.js";
import { logger } from "../utils/logger.js";
import { commands } from "../commands/_init.js";

export async function helpController(interaction: CommandInteraction) {
    const { command: commandName, clientUser } = {
        command: (interaction.options.get("command")?.value || "all") as string,
        clientUser: interaction.client.user,
    };

    // Embed
    const helpEmbed = (await helpComponent(commandName, clientUser)) as EmbedBuilder;

    try {
        return interaction.reply({
            content: "",
            embeds: [helpEmbed],
        });
    } catch (error: any) {
        logger.error(`An error happened in "Help"`);
        logger.error(`${error.name} - ${error.message}`);
        return;
    }
}

export async function helpAutocompleteController(interaction: AutocompleteInteraction) {
    const focusedValue = interaction.options.getFocused();
    type CommandList = Array<{ name: string; value: string }>;

    const commandList: CommandList = Array.from(Object.values(commands)).map((command) => {
        const commandRealName = command.data.name;
        const commandSnakeCase = commandRealName.replace(
            /[A-Z]/g,
            (letter) => `_${letter.toLowerCase()}`
        );

        return { name: commandSnakeCase, value: commandRealName };
    });

    const filtered = commandList.filter((choice) =>
        choice.name.toLowerCase().startsWith(focusedValue.toLowerCase())
    );

    const result = filtered.map((choice) => {
        return {
            name: choice.name,
            value: choice.value,
        };
    });

    return interaction.respond(result.splice(0, 10)).catch(() => {});
}
