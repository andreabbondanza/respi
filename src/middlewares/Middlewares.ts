import { RequestHandler } from "express";
import {LoggerMiddleware} from "./LoggerMiddleware";

/**
 * The list of middlewares (list take care of order)
 */
export const middlewares: RequestHandler[] = 
[
    new LoggerMiddleware().get()
];