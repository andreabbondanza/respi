import fs from "fs";
import path from "path";
import { IApiController } from "./common/IApiController";


export const appConfig: AppConfig = {
    controllers: "./dist/controllers"
}

export class AppConfig{
    public controllers: string = "";
    public static loadControllers(): IApiController[]
    {
        const result: IApiController[] = [];
        const controllers = fs.readdirSync(appConfig.controllers).where(x => x.endsWith(".controller.js"));
        for (const controller of controllers) {
            const controllerName = controller.split(".")[0];
            console.log(__dirname);
            const currController = require("./controllers/Home.controller.js");
            result.push(new (currController.HomeController)());
        }
        return result;
    }
}