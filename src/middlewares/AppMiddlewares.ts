import { RequestHandler } from "express";
import { LoggerMiddleware } from "./LoggerMiddleware";
import { ProduceJsonMiddleware } from "./ProduceJsonMiddleware";
import { StaticFilesMiddleware } from "./StaticFilesMiddleware";

/**
 * The list of middlewares (list take care of order)
 */

export function middlewares(): RequestHandler[]
{
    return [
        new LoggerMiddleware().get(),
        new ProduceJsonMiddleware().get(),
        new StaticFilesMiddleware().get()
    ];
}

