import { NextFunction } from "express";
import { LanguageManager } from "language-manager-ts";
import { IApi } from "./interfaces/IApi";
import { IApiController } from "./interfaces/IApiController";
import { IConfig } from "./interfaces/IConfig";
import { IRouteDefinition } from "./interfaces/IDecoratorDefinition";
import { PoolData } from "./PoolData";
export class ApiController implements IApiController
{
    protected _lang: LanguageManager | undefined = undefined;
    private _api: IApi | undefined = undefined;
    protected cfg: IConfig | undefined = undefined;
    public init(api: IApi, poolData: PoolData = new PoolData()): IApiController
    {
        this._lang = poolData.get("lang");
        this.cfg = poolData.get("cfg");
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
        const routes: IRouteDefinition[] = Reflect.getMetadata('routes', myclass[className]);
        for (const route of routes)
        {
            const methodName = route.methodName.toString();
            let request: any = undefined;
            if (route.type === "api")
                request = (req: Express.Request, res: Express.Response) =>
                {
                    self[methodName](req, res);
                }
            if (route.type === "middleware")
                request = (req: Express.Request, res: Express.Response, next: NextFunction) =>
                {
                    self[methodName](req, res, next);
                }
            this.getApi()?.api[route.requestMethod](prefix + route.path, request);
        }
    }
}
