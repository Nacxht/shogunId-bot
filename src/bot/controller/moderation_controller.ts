import {
    ActionRowBuilder,
    BaseGuildTextChannel,
    BaseInteraction,
    ButtonBuilder,
    CommandInteraction,
} from "discord.js";
import {
    banComponents,
    kickComponents,
    purgeComponents,
} from "../components/moderation_components.js";
import { logger } from "../utils/logger.js";

export async function kickController(interaction: CommandInteraction) {
    const { target, reason } = {
        target: interaction.options.getUser("target", true),
        reason: interaction.options.get("reason")?.value || "No reason provided",
    };

    // Components
    const buttons: ActionRowBuilder<ButtonBuilder> = await kickComponents();

    try {
        if (interaction.user.id === target.id) {
            return interaction.reply({
                content: `Can't kick yourself!`,
                components: [],
                ephemeral: true,
            });
        }

        const response = await interaction.reply({
            content: `Are you sure want to ban ${target}\nFor reason "${reason}"?`,
            components: [buttons],
            ephemeral: true,
        });

        const confirmation = await response.awaitMessageComponent({
            filter: (i) => i.user.id === interaction.user.id, // Prevent other users from interacting
            time: 60_000,
        });

        // If user press cancel button
        if (confirmation.customId !== "confirm") {
            return interaction.editReply({
                content: `Cancelled to kicking ${target}`,
                components: [],
            });
        }

        return interaction
            .followUp({
                content: `Kicking ${target}\nReason: "${reason}"`,
                components: [],
                ephemeral: false,
            })
            .then(async () => {
                await interaction.deleteReply();
                await interaction.guild?.members.kick(target);
            });
    } catch (error: any) {
        switch (error.name) {
            case "Error [InteractionCollectorError]":
                return interaction.editReply({
                    content: `Confirmation not received within 1 minute, cancelling...`,
                    components: [],
                });

            default:
                logger.error(`Error at "Kick"\nError:\n${error}\nName: ${error.name}`);
        }
    }
}

export async function banController(interaction: CommandInteraction) {
    const { target, reason } = {
        target: interaction.options.getUser("target", true),
        reason: interaction.options.get("reason", true).value,
    };

    // Components
    const buttons: ActionRowBuilder<ButtonBuilder> = await banComponents();

    try {
        if (interaction.user.id === target.id) {
            return interaction.reply({
                content: `Can't kick yourself`,
                components: [],
                ephemeral: true,
            });
        }

        const response = await interaction.reply({
            content: `Are you sure want to ban ${target}\nFor reason: "${reason}"?`,
            components: [buttons],
            ephemeral: true,
        });

        const confirmation = await response.awaitMessageComponent({
            filter: (i) => i.user.id === interaction.user.id,
            time: 60_000,
        });

        // If user press cancel button
        if (confirmation.customId !== "confirm") {
            return interaction.editReply({
                content: `Cancelled to banning ${target}`,
                components: [],
            });
        }

        return interaction
            .followUp({
                content: `Banning ${target}\nFor reason: ${reason}`,
                components: [],
                ephemeral: false,
            })
            .then(async () => {
                await interaction.deleteReply();
                await interaction.guild?.members.ban(target);
            });
    } catch (error: any) {
        switch (error.name) {
            case "Error [InteractionCollectorError]":
                return interaction.editReply({
                    content: `Confirmation not received within 1 minute, cancelling...`,
                    components: [],
                });

            default:
                logger.error(`Error at "Ban"\nError:\n${error}\nName: ${error.name}`);
        }
    }
}

export async function purgeController(interaction: CommandInteraction) {
    const { value } = {
        value: Number(interaction.options.get("value", true).value),
    };

    // Components
    const button: ActionRowBuilder<ButtonBuilder> = await purgeComponents();

    try {
        if (value < 1 || value > 100) {
            return interaction.reply(
                "Can't bulk delete with `value that lesser than 1` or `value that greater than 100 messages`"
            );
        }

        const response = await interaction.reply({
            content: `Are you sure wan't to bulk delete ${value} messages?`,
            components: [button],
            ephemeral: true,
        });

        const confirmation = await response.awaitMessageComponent({
            filter: (i) => i.user.id === interaction.user.id,
            time: 60_000,
        });

        // User press cancel button
        if (confirmation.customId !== "confirm") {
            return interaction.editReply({
                content: `Cancelled to bulk delete ${value} messages`,
                components: [],
            });
        }

        const channel: BaseGuildTextChannel = interaction.channel as BaseGuildTextChannel;
        return await channel.bulkDelete(value);
    } catch (error: any) {
        switch (error.name) {
            default:
                logger.error(`Error at "Purge"\nError:\n${error}\nName: ${error.name}`);
        }
    }
}
