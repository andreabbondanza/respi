import { LanguageManager } from "language-manager-ts";
import { PoolData } from "../PoolData";
import { IApi } from "./IApi";

export interface IApiControllerTuple
{
    instance: IApiController;
    controllerClass: any;
}

export interface IApiController
{
    /**
     * Index signatures
     */
    [key: string]: any;
    /**
     * Init a controller
     * @param api the api object for the controller
     */
    init(api: IApi, pool: PoolData): IApiController;
    /**
     * Return current controller api object
     */
    getApi(): IApi | undefined;
    /**
     * Enable the routing for the controller
     */
    enableRouting(myclass: any): void;
}
