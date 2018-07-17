import {Command} from "./Command";
import {StaticHelpers} from "./StaticHelpers";

export class NextTurnCommand extends Command {
    constructor(){
        super("next");
    }

    execute(inputText: string, args: string[]): void {
        $.ajax({
            contentType: "application/json",
            method: 'PUT',
            url: `http://${StaticHelpers.server}:${StaticHelpers.port}/api/nextTurn`,
            statusCode: {
                200: function () {
                    let playingCommand = StaticHelpers.COMMANDS.find(f => f.getCommandName() === "playing");
                    playingCommand.execute("", [""]);
                },
                404: function () {
                    let playingCommand = StaticHelpers.COMMANDS.find(f => f.getCommandName() === "playing");
                    playingCommand.execute("", [""]);
                },
                500: function () {
                    StaticHelpers.application().commands.push({
                        input: inputText,
                        output: "Error 500, Something went wrong!",
                        templateName: "default-component"
                    });
                }
            }
        });
    }
}