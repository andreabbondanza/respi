export interface IConfig {
    server: IServer;
}

export interface IServer{
    port: number;
    host: string;
}