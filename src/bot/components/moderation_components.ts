import { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { Button } from "./main_button.js";

export async function kickComponents() {
    const confirmButton = new Button("confirm", "Kick this member").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;
    const buttonComponent = new ActionRowBuilder<ButtonBuilder>().addComponents(
        confirmButton,
        cancelButton
    );

    return buttonComponent;
}

export async function banComponents() {
    const confirmButton = new Button("confirm", "Ban this member").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;
    const buttonComponent = new ActionRowBuilder<ButtonBuilder>().addComponents(
        confirmButton,
        cancelButton
    );

    return buttonComponent;
}

export async function purgeComponents() {
    const confirmButton = new Button("confirm", "Confirm bulk delete").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;
    const buttonComponent = new ActionRowBuilder<ButtonBuilder>().addComponents(
        confirmButton,
        cancelButton
    );

    return buttonComponent;
}

export async function timeoutComponents() {
    const confirmButton = new Button("confirm", "Timeout this user").buttonDanger;
    const cancelButton = new Button("cancel", "Cancel").buttonSecondary;
    const buttonComponent = new ActionRowBuilder<ButtonBuilder>().addComponents(
        confirmButton,
        cancelButton
    );

    return buttonComponent;
}
