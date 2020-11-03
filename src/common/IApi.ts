import express, { Express } from 'express';
import { Server } from 'http';
import { ApiError } from './Errors/ApiError';


export interface IApi{
    readonly api: Express;
    listen(port: number): void;
}


