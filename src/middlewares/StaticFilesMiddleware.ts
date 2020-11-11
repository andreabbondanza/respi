import express, { RequestHandler } from "express";
import { logger } from "../App";
import { IAppMiddleware } from "../common/interfaces/IAppMiddleware";


export class StaticFilesMiddleware implements IAppMiddleware
{
    public get<T>(...val: T[]): RequestHandler
    {
        logger.log("Static file middleware");
        return express.static("static");
    }

}
