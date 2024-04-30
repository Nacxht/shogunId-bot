import { Client } from "discord.js";
import { onReady } from "./on_ready.js";
import { onCommand } from "./on_command.js";
import { onAutocomplete } from "./on_autocomplete.js";

const events: Array<Function> = [onReady, onCommand, onAutocomplete];

export async function eventHandlerInit(client: Client) {
    events.forEach((event) => {
        event(client);
    });
}
