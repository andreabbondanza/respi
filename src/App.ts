import { RequestHandler } from "express";
import { Api } from "./common/Api";
import { Request, Response } from "express";
import { IApiApp } from "./common/interfaces/IApiApp";
import { IApiControllerTuple } from "./common/interfaces/IApiController";
import { middlewares } from "./middlewares/Middlewares";
import dewlinq from 'dewlinq';
import dewstrings from 'dewstrings';
import { AppEnvironment } from "./AppEnvironment";
import "reflect-metadata";

dewlinq();
dewstrings();

export class App implements IApiApp
{
    private _api: Api | undefined = undefined;
    private _config: any = {};

    public constructor()
    {
        this._api = new Api();
    }
    /**
     * Perform configuration 
     */
    public configure()
    {
        const config = AppEnvironment.loadConfig();
        this._config.port = config.server.port;
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
    public setupControllers(...controllers: IApiControllerTuple[])
    {
        if (this._api)
        {
            for (const controller of controllers)
            {
                controller.instance.init(this._api).enableRouting(controller.controllerClass);
            }
        }
        this._api?.api.get("*", (req: Request, res: Response) =>
        {
            res.status(404).send("Can't find resource!");
        });
        return this;
    }
    /**
     * Start the server
     */
    public start()
    {
        this._api?.listen(this._config.port);
    }
}

const app = new App();

const controllers = AppEnvironment.loadControllers();

app.configure()
    .uses(...middlewares)
    .setupControllers(...controllers)
    .start();

