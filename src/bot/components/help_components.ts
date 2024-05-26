import { ClientUser, EmbedBuilder } from "discord.js";
import { commands } from "../commands/_init.js";

export async function helpComponent(commandName: string, clientUser: ClientUser) {
    type CommandList = Array<{ name: string; description: string }>;
    const commandList: CommandList = Array.from(Object.values(commands)).map((command) => {
        const commandName = command.data.name;
        const commandDesc = command.data.description;

        return { name: commandName, description: commandDesc };
    });

    // Client Data
    const clientUsername: string = clientUser.username;
    const clientAvatar: string = clientUser.avatarURL({ extension: "png" }) as string;

    if (commandName !== "all") {
        // Get command
        const command = commandList.find((command) => command.name === commandName);

        const helpEmbed = new EmbedBuilder()
            .setTitle(command?.name!)
            .setDescription(command?.description!)
            .setAuthor({ name: clientUsername, iconURL: clientAvatar })
            .setThumbnail(clientAvatar)
            .setTimestamp()
            .setColor(0x0099ff);

        return helpEmbed;
    }

    const commandText: Array<string> = [];

    commandList.forEach((command) => {
        const result = `**${command.name}**\n${command.description}\n\n`;

        commandText.push(result);
    });

    const helpEmbed = new EmbedBuilder()
        .setTitle("Command List")
        .setDescription(commandText.join().replaceAll(",", ""))
        .setAuthor({ name: clientUsername, iconURL: clientAvatar })
        .setThumbnail(clientAvatar)
        .setTimestamp()
        .setColor(0x0099ff);

    return helpEmbed;
}
