import { RequestHandler } from "express";
import { IApiController } from "./IApiController";

export interface IApiApp
{
    /**
     * App configuration
     */
    configure(): IApiApp;
    /**
     * This will set all middleware from the list
     * @param middlewares list of all middlewares
     */
    uses(...middlewares: RequestHandler[]): IApiApp;
    /**
     * Setup the controllers
     * @param controllers the list of controllers with routes to use
     */
    setupControllers(...controllers: IApiController[]): IApiApp;
    /**
     * Start the app
     */
    start(): void;
}