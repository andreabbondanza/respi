import express, { Express } from 'express';
import { Server } from 'http';
import { ApiError } from '../errors/ApiError';
import { IApi } from './interfaces/IApi';

export class Api implements IApi
{
    private _app: Express | undefined = undefined;
    private _server: Server | undefined = undefined;
    /**
     * Expose the express app element
     */
    public get api(): Express
    {
        if (this._app)
            return this._app;
        else
            throw new ApiError("Seems _app is undefined")

    }

    public constructor()
    {
        this._app = express();
    }
    /**
     * Shutdown previous listener and create a new
     * @param port port number
     */
    public listen(port: Number): void
    {
        this._server?.close();
        this._server = this._app?.listen(port);
    }
}

