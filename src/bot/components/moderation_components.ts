import { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { Button } from "./main_button.js";

export async function kickComponents(): Promise<ActionRowBuilder<ButtonBuilder>> {
    const confirmButton = new Button("confirm", "Kick this member").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;

    return new ActionRowBuilder<ButtonBuilder>().addComponents(confirmButton, cancelButton);
}

export async function banComponents(): Promise<ActionRowBuilder<ButtonBuilder>> {
    const confirmButton = new Button("confirm", "Ban this member").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;

    return new ActionRowBuilder<ButtonBuilder>().addComponents(confirmButton, cancelButton);
}

export async function purgeComponents(): Promise<ActionRowBuilder<ButtonBuilder>> {
    const confirmButton = new Button("confirm", "Confirm bulk delete").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;

    return new ActionRowBuilder<ButtonBuilder>().addComponents(confirmButton, cancelButton);
}
