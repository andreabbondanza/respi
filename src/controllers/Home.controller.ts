import { RequestHandler } from "express";
import { IApi } from "../common/IApi";
import { IApiController } from "../common/IApiController";

export class HomeController implements IApiController{
    private _api: IApi | undefined = undefined; 
    public init(api: IApi): IApiController
    {
        this._api = api;
        return this;
    }
    public configure(): IApiController
    {
         this._api?.api.get("/",this.home());
         return this;  
    }
    
    public home(): RequestHandler {
        return (req: any,res: any) => {

            res.send(
            {
                hello: "ciao",
                math: Math.random()*100
            });
        }
    }

}