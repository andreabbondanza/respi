import { IApi } from "./IApi";
import { IApiApp } from "./IApiApp";

export interface IApiController{
    init(api: IApi): IApiController;
    configure(): IApiController;
}