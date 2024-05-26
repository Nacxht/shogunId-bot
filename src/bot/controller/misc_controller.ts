import {
    CommandInteraction,
    CommandInteractionOptionResolver,
    Guild,
    GuildMember,
} from "discord.js";
import {
    avatarComponents,
    serverInfoComponents,
    userInfoComponents,
} from "../components/misc_components.js";
import { logger } from "../utils/logger.js";

export async function pingController(interaction: CommandInteraction) {
    const sent = await interaction.reply({ content: "Pinging...", fetchReply: true });

    return interaction.editReply({
        content: `Pong!\nWebsocket Heartbeat: ${interaction.client.ws.ping}\nRoundtrip Latency: ${
            sent.createdTimestamp - interaction.createdTimestamp
        }ms`,
    });
}

export async function userInfoController(interaction: CommandInteraction) {
    try {
        const clientUser = interaction.client.user;
        const subCommand: string = (
            interaction.options as CommandInteractionOptionResolver
        ).getSubcommand();

        if (subCommand === "server") {
            const guild = interaction.guild as Guild;

            // Embed
            const serverInfoEmbed = await serverInfoComponents(guild, clientUser);

            return interaction.reply({
                content: `Information of this server (${guild.name})`,
                embeds: [serverInfoEmbed],
            });
        }

        const { target, member } = {
            target: interaction.options.getUser("target", true),
            member: interaction.options.getMember("target") as GuildMember,
        };

        // Embed
        const userInfoEmbed = await userInfoComponents(target, member, clientUser);

        return interaction.reply({
            content: `Information of ${target}`,
            embeds: [userInfoEmbed],
        });
    } catch (error: any) {
        logger.error(`An error happened in "Info"`);
        logger.error(`${error.name} - ${error.message}`);
    }
}

export async function avatarController(interaction: CommandInteraction) {
    const { target, clientUser } = {
        target: interaction.options.getUser("target", true),
        clientUser: interaction.client.user,
    };

    // Embed
    const avatarEmbed = await avatarComponents(target, clientUser);

    try {
        return interaction.reply({
            content: `Avatar of ${target}`,
            embeds: [avatarEmbed],
        });
    } catch (error: any) {
        logger.error(`An error happened in "Info"`);
        logger.error(`${error.name} - ${error.message}`);
    }
}
