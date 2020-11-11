import dewlinq from 'dewlinq';
import dewstrings from 'dewstrings';
import { Request, RequestHandler, Response } from "express";
import { LanguageManager, StorageServer } from "language-manager-ts";
import "reflect-metadata";
import { StandardResponse } from "standard-response";
import { AppEnvironment } from "./AppEnvironment";
import { Api } from "./common/Api";
import { IApiApp } from "./common/interfaces/IApiApp";
import { IConfig } from "./common/interfaces/IConfig";
import { Logger } from './common/Logger';
import { PoolData } from "./common/PoolData";
import { middlewares } from "./middlewares/AppMiddlewares";
import process from "process";

dewlinq();
dewstrings();

export const logger = new Logger(process.env.NODE_ENV);

export class App implements IApiApp
{
    private _api: Api | undefined = undefined;
    private _config: IConfig | undefined = undefined;
    private _poolData: PoolData = new PoolData();

    public constructor()
    {
        this._api = new Api();
    }
    /**
     * Perform configuration 
     */
    public configure()
    {
        this._config = AppEnvironment.loadConfig();
        this._config.server.port = this._config.server.port;
        this._poolData.push("lang", new LanguageManager(new StorageServer(".."))
            .addLanguages(...AppEnvironment.loadLocals(this._config))
            .setCurrentLanguage(this._config.localization.lang));
        return this;
    }
    /**
     * Perform middleware settings
     * @param middlewares: the middlewares
     */
    public uses(...middlewares: RequestHandler[])
    {
        if (this._api)
        {
            for (const middleware of middlewares)
            {
                this._api.api.use(middleware);
            }
        }
        return this;
    }
    /**
     * Set the api from the controller
     * @param controllers the IApiController controllers
     */
    public setupControllers()
    {
        if (this._config)
        {
            const controllers = AppEnvironment.loadControllers(this._config);
            if (this._api)
            {
                for (const controller of controllers)
                {
                    controller.instance
                        .init(this._api, this._poolData)
                        .enableRouting(controller.controllerClass);
                }
            }
        } 1
        // 404, every not found falls here
        this._api?.api.get("*", (req: Request, res: Response) =>
        {
            const response = new StandardResponse();
            response.errorMessage = "Resource not found";
            res.setHeader("Content-Type", "application/json");
            res.status(404).send(response.toJson());
        });
        return this;
    }
    /**
     * Start the server
     */
    public start()
    {
        if (this._config)
        {
            this._api?.listen(this._config.server.port);
            logger.log("Server is listening on " 
                        + this._config.server.host 
                        + ":" 
                        + this._config.server.port);
        }
    }
}

const app = new App();

app.configure()
    .uses(...middlewares())
    .setupControllers()
    .start();

