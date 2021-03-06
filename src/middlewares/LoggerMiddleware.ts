import { RequestHandler } from "express";
import { IAppMiddleware } from "../common/interfaces/IAppMiddleware";


export class LoggerMiddleware implements IAppMiddleware
{
    public get<T>(...val: T[]): RequestHandler
    {
        return (req, res, next) =>
        {
            console.log("Log from interface");

            next();
            console.log("ciao");
        }
    }

}
