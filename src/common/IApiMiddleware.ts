import { RequestHandler } from "express";

export interface IApiMiddleware
{
    /**
     * Return the callback for the middleware
     * @param val optional value
     */
    get<T>(...val: T[]): RequestHandler;
}