import { RequestHandler } from "express";
import {LoggerMiddleware} from "./LoggerMiddleware";

export const middlewares: RequestHandler[] = 
[
    new LoggerMiddleware().get()
];