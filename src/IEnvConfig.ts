export const envConfig: IEnvConfig = {
    controllers: "./controllers",
    root: ".."
}

export interface IEnvConfig{
    /**
     * Controllers path from dist
     */
    controllers: string;
    /**
     * Root path for the app
     */
    root: string;
}