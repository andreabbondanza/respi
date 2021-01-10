import { RequestHandler } from "express";

export interface IAppMiddleware
{
    /**
     * Return the callback for the middleware
     * @param val optional value
     */
    get<T>(...val: T[]): RequestHandler;
}
