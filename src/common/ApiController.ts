import { HomeController } from "../controllers/Home.controller";
import { IApi } from "./interfaces/IApi";
import { IApiController } from "./interfaces/IApiController";
import { IRouteDefinition } from "./interfaces/IRouterDefinition";

export class ApiController implements IApiController
{
    private _api: IApi | undefined = undefined;
    public init(api: IApi): IApiController
    {
        this._api = api;
        return this;
    }
    public getApi(): IApi | undefined
    {
        return this._api;
    }

    public enableRouting(myclass: any): void
    {
        const self: IApiController = this;
        const className = Object.keys(myclass)[0];
        const prefix = Reflect.getMetadata("baseUrl", myclass[className]);
        const routes: Array<IRouteDefinition> = Reflect.getMetadata('routes', myclass[className]);
        for (const route of routes)
        {
            const methodName = route.methodName.toString();
            const request = (req: Express.Request, res: Express.Response) =>
            {
                self[methodName](req, res)
            }
            this.getApi()?.api[route.requestMethod](prefix + route.path, request)
        }
    }
}