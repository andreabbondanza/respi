import { RequestHandler } from "express";

export interface IApiMiddleware{
    get<T>(...val: T[]): RequestHandler;
}