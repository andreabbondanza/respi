import { IApi } from "./IApi";
import { IApiApp } from "./IApiApp";

export interface IApiController
{
    /**
     * Init a controller 
     * @param api the api object for the controller
     */
    init(api: IApi): IApiController;
    /**
     * This will contains the controller configuration
     */
    configure(): IApiController;
}