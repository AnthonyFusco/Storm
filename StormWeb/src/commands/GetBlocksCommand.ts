import {Command} from "./Command";
import {StaticHelpers} from "../StaticHelpers";
import * as $ from "jquery";
import {IHistoryCommand} from "../Application";
import {HistoryCommand} from "../poco/HistoryCommand";

export class GetBlocksCommand extends Command {
    constructor(){
        super("get-blocks");
    }

    async execute(inputText: string, args: string[]): Promise<IHistoryCommand> {
        const result = await $.ajax({
            contentType: "application/json",
            url: `http://${StaticHelpers.server}:${StaticHelpers.port}/api/blocks`,
        });
        return new HistoryCommand(inputText, result, "default-component");
    }

}