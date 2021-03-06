import {Command} from "./Command";
import {StaticHelpers} from "../StaticHelpers";
import * as $ from "jquery";
import {IHistoryCommand} from "../Application";
import {HistoryCommand} from "../poco/HistoryCommand";

export class RollInitiativeCommand extends Command{
    constructor() {
        super("initiative");
    }

    async execute(inputText: string, args: string[]): Promise<IHistoryCommand> {
        try {
            const result = await $.ajax({
                contentType: "application/json",
                method: 'PUT',
                url: `http://${StaticHelpers.server}:${StaticHelpers.port}/api/roll/initiative`
            });
            return new HistoryCommand(inputText, "initiative rolled.", "default-component");
        } catch (e) {
            switch (e.status) {
                case 404 : return new HistoryCommand(inputText, "No one can roll initiative in the encounter.", "default-component");
                case 500 : return new HistoryCommand(inputText, "Error 500, Something went wrong!", "default-component");
                default : return null;
            }
        }
    }

}