import { Express } from 'express';

export interface IApi
{
    readonly api: Express;
    listen(port: number): void;
    
}


