export interface IConfig {
    server: IServer;
    fileSystem: IFileSystem;
    localization: ILocalization;
}

export interface IServer{
    port: number;
    host: string;
}

export interface IFileSystem
{
    localizationConfig: string;
    localizationFiles: string;
    root: string;
    controllers: string;
}

export interface ILocalization{
    lang: string;
}