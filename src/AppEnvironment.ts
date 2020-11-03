import fs from "fs";
import path from "path";
import { IApiController } from "./common/IApiController";
import { envConfig } from "./IEnvConfig";

export class AppEnvironment
{
    /**
     * Load all controllers from controllers folder
     */
    public static loadControllers(): IApiController[]
    {
        const result: IApiController[] = [];
        const controllers = fs.readdirSync(envConfig.controllers).where(x => x.endsWith(".controller.js"));
        for (const controller of controllers) {
            const currController = require("./" + path.join(envConfig.controllers,controller));
            result.push(new (currController.HomeController)());
        }
        return result;
    }
}