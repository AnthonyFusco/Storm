import {Accessor} from "./Accessor";
import {Block} from "../engine/Adapters";

export default class LocalAccessor extends Accessor {

    async getBlockByName(blockName: string): Promise<Block> {
        let blockStored = localStorage.getItem(blockName);
        if (blockStored) {
            return new Promise<Block>((resolve, reject) => {
                let blockOpt = this.getBlockFromStormText(blockStored);
                resolve(blockOpt.get())
            });
        } else {
            return new Promise<Block>((resolve, reject) => {
                this.loadBlockFromBrowserDB(blockName)
                    .then(blockText => resolve(this.getBlockFromStormText(blockText).get()))
                    .catch(reason => reject(reason))
            });
        }
    }

    async getBlockNameList(): Promise<string[]> {
        let userBlocks = [];
        for (let key in localStorage) {
            console.log(key);
            if (key.startsWith("db/user/")) {
                userBlocks.push(key.substr(7, key.length));
            }
        }
        let dbBlocks = [];
        console.log("files in dir");
        this.getFilesInDirectory()
            .then(value => console.log(value))
            .catch(reason => console.log(reason));

        return userBlocks;
    }

    async getFilesInDirectory(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("get", "db/", true);
            // xhr.responseType = "arraybuffer";
            xhr.addEventListener("load", function () {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }, false);
            xhr.send();
        });
    }

    saveBlock(blockName: string, block: string): string {
        localStorage.setItem("db/user/" + blockName, block); //todo antlr validation
        return "";
    }

}