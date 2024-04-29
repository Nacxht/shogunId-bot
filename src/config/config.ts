import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN: string = process.env.BOT_TOKEN || "";
const CLIENT_ID: string = process.env.CLIENT_ID || "";
const GUILD_ID: string = process.env.GUILD_ID || "";

export const botConfig = {
    token: BOT_TOKEN,
    clientId: CLIENT_ID,
    guildId: GUILD_ID,
};
