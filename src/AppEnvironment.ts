import fs from "fs";
import path from "path";
import { IApiController } from "./common/interfaces/IApiController";
import { IConfig } from "./common/interfaces/IConfig";
import { envConfig } from "./IEnvConfig";

export class AppEnvironment
{
    /**
     * Load settings from configuration file
     */
    public static loadConfig(): IConfig
    {
        const file = fs.readFileSync(path.join(envConfig.root, "config.app.json"), { encoding: "utf8" });
        let config: IConfig = JSON.parse(file);
        return config;
    }
    /**
     * Load all controllers from controllers folder
     */
    public static loadControllers(): IApiController[]
    {
        const result: IApiController[] = [];
        const controllers = fs.readdirSync(envConfig.controllers).where(x => x.endsWith(".controller.js"));
        for (const controller of controllers)
        {
            const currController = require("./" + path.join(envConfig.controllers, controller));
            const name = Object.keys(currController)[0];
            result.push(new (currController[name])());
        }
        return result;
    }

  
}