import { RequestHandler } from "express";
import { LanguageManager, StorageServer } from "language-manager-ts";
import { LoggerMiddleware } from "./LoggerMiddleware";
import { ProduceJsonMiddleware } from "./ProduceJsonMiddleware";

/**
 * The list of middlewares (list take care of order)
 */
export const middlewares: RequestHandler[] =
    [
        new LoggerMiddleware().get(),
        new ProduceJsonMiddleware().get()
    ];