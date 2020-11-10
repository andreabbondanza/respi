import { RequestHandler } from "express";
import { IAppMiddleware } from "../common/interfaces/IAppMiddleware";


export class ProduceJsonMiddleware implements IAppMiddleware
{
    public get<T>(...val: T[]): RequestHandler
    {
        return (req, res, next) =>
        {
            res.setHeader("Content-Type","application/json");
            next();
            
        }
    }

}
