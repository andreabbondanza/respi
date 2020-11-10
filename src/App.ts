import { RequestHandler } from "express";
import { Api } from "./common/Api";
import { IApiApp } from "./common/IApiApp";
import { IApiController } from "./common/IApiController";
import { middlewares } from "./middlewares/Middlewares";
import dewlinq from 'dewlinq';
import dewstrings from 'dewstrings';
import { AppEnvironment } from "./AppEnvironment";
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
        console.log(config);
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
    public setupControllers(...controllers: IApiController[])
    {
        if (this._api)
        {
            for (const apiClass of controllers)
            {
                apiClass.init(this._api).configure();
            }
        }
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
.setupControllers(...controllers).start();

