import { RequestHandler } from "express";
import { IApiMiddleware } from "../common/IApiMiddleware";


export class LoggerMiddleware implements IApiMiddleware
{
    public get<T>(...val: T[]): RequestHandler
    {
        return (req, res, next) =>
        {
            console.log("Log from interface");
            console.log("ciao");
            next();
        }
    }

}
