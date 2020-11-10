import fs from "fs";
import { Language } from "language-manager-ts";
import path from "path";
import { IApiController, IApiControllerTuple } from "./common/interfaces/IApiController";
import { IConfig } from "./common/interfaces/IConfig";

export class AppEnvironment
{
    /**
     * Load settings from configuration file
     */
    public static loadConfig(): IConfig
    {
        const file = fs.readFileSync(path.join("..", "config.app.json"), { encoding: "utf8" });
        let config: IConfig = JSON.parse(file);
        return config;
    }
    /**
     * Load all controllers from controllers folder
     */
    public static loadControllers(config: IConfig): IApiControllerTuple[]
    {
        const result: IApiControllerTuple[] = [];
        const controllers = fs.readdirSync(config.fileSystem.controllers).where(x => x.endsWith(".controller.js"));
        for (const controller of controllers)
        {
            const currController = require("./" + path.join(config.fileSystem.controllers, controller));
            const name = Object.keys(currController)[0];
            result.push({
                controllerClass: currController,
                instance: new (currController[name])()
            });
        }
        return result;
    }

      /**
     * Load all localization files from localization folder
     */
    public static loadLocals(config: IConfig): Language[]
    {
        const result: Language[] = [];
        const locals = fs.readdirSync(config.fileSystem.localizationFiles).where(x => x.endsWith(".local.js"));
        for (const local of locals)
        {
            const currLocal = require("./" + path.join(config.fileSystem.localizationFiles, local));
            const name = Object.keys(currLocal)[0];
            result.push(new (currLocal[name])());
        }
        return result;
    }

  
}