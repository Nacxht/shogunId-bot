import { ButtonBuilder, ButtonStyle } from "discord.js";

export class Button {
    customId: string;
    label: string;
    isDisable: boolean;
    emoji: string;

    constructor(customId: string, label: string, isDisable?: boolean, emoji?: string) {
        this.customId = customId;
        this.label = label;
        this.isDisable = isDisable || false;
        this.emoji = emoji || "";
    }

    get buttonPrimary() {
        return new ButtonBuilder()
            .setCustomId(this.customId)
            .setLabel(this.label)
            .setStyle(ButtonStyle.Primary)
            .setDisabled(this.isDisable);
    }

    get buttonSecondary() {
        return new ButtonBuilder()
            .setCustomId(this.customId)
            .setLabel(this.label)
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(this.isDisable);
    }

    get buttonSuccess() {
        return new ButtonBuilder()
            .setCustomId(this.customId)
            .setLabel(this.label)
            .setStyle(ButtonStyle.Success)
            .setDisabled(this.isDisable);
    }

    get buttonDanger() {
        return new ButtonBuilder()
            .setCustomId(this.customId)
            .setLabel(this.label)
            .setStyle(ButtonStyle.Danger)
            .setDisabled(this.isDisable);
    }
}
