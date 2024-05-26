import { ClientUser, EmbedBuilder, Guild, GuildMember, User } from "discord.js";
import { dayMonthYearShort, monthDayYearShort } from "../utils/date_converter.js";

export async function userInfoComponents(user: User, member: GuildMember, clientUser: ClientUser) {
    // User / Member Data
    const { id: userId, username } = user;
    const createdAt = await dayMonthYearShort(new Date(user.createdAt));
    const joinedAt = await dayMonthYearShort(new Date(member.joinedAt!));
    const userAvatar = user.avatarURL({ extension: "png" });

    // Client data
    const { username: clientUsername } = clientUser;
    const clientAvatar = clientUser.avatarURL({ extension: "png" });

    // Embed
    const userInfoEmbed = new EmbedBuilder()
        .setTitle("User Info")
        .setDescription(`Detail of ${user}`)
        .setThumbnail(userAvatar)
        .setAuthor({ name: clientUsername, iconURL: clientAvatar! })
        .setFields(
            { name: "User ID", value: userId },
            { name: "Username", value: username },
            {
                name: "Created At",
                value: createdAt,
                inline: true,
            },
            {
                name: "Joined At",
                value: joinedAt,
                inline: true,
            }
        )
        .setTimestamp()
        .setColor(0x0099ff);

    return userInfoEmbed;
}

export async function serverInfoComponents(guild: Guild, clientUser: ClientUser) {
    // Guild data
    const createdAt = await monthDayYearShort(new Date(guild.createdAt));
    const guildIcon = guild.iconURL({ extension: "png" });
    const guildDescription = guild.description || "`No description provided`";
    const { name: guildName, verified: isVerified, maximumMembers, memberCount } = guild;

    // Client Data
    const { username: clientUsername } = clientUser;
    const clientAvatar = clientUser.avatarURL({ extension: "png" });

    // Embed
    const guildInfoEmbed = new EmbedBuilder()
        .setTitle("Server Info")
        .setDescription(`Detail of "${guildName}" discord server`)
        .setThumbnail(guildIcon)
        .setAuthor({ name: clientUsername, iconURL: clientAvatar! })
        .addFields(
            { name: "Server Name", value: guildName },
            { name: "Server Description", value: `${guildDescription}` },
            { name: "Is Verified", value: `${isVerified}` },
            { name: "Member Count", value: `${memberCount}`, inline: true },
            { name: "Maximum Member", value: `${maximumMembers}`, inline: true }
        )
        .setTimestamp()
        .setColor(0x0099ff);

    return guildInfoEmbed;
}

export async function avatarComponents(user: User, clientUser: ClientUser) {
    // User data
    const userAvatar = user.avatarURL({ extension: "png", size: 4096 });

    // Client data
    const { username: clientUsername } = clientUser;
    const clientAvatar = clientUser.avatarURL({ extension: "png" });

    const avatarEmbed = new EmbedBuilder()
        .setTitle("Avatar")
        .setAuthor({ name: clientUsername, iconURL: clientAvatar! })
        .setImage(userAvatar)
        .setTimestamp()
        .setColor(0x0099ff);

    return avatarEmbed;
}
