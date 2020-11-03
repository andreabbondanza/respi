import { RequestHandler } from "express";
import { IApiController } from "./IApiController";

export interface IApiApp
{
    configure(): IApiApp;
    uses(...middlewares: RequestHandler[]): IApiApp;
    setupApi(...classes: IApiController[]): IApiApp;
    start(): void;
}