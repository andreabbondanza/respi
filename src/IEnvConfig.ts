export const envConfig: IEnvConfig = {
    controllers: "./controllers"
}

export interface IEnvConfig{
    /**
     * Controllers path from dist
     */
    controllers: string;
}