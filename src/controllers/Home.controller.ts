import { NextFunction, Request, Response } from "express";
import { StandardResponse } from "standard-response";
import { ApiController } from "../common/ApiController";
import { controller, get, getMiddleware } from "../common/Decorators";


@controller("")
export class HomeController extends ApiController
{
    @getMiddleware("")
    public homeMiddleware(req: Request, res: Response, next: NextFunction){
        console.log("Logging from home middleware! :)");
        next();
    }

    @get("")
    public home2(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = this._lang?._("Hello!");
        console.log(response.data);
        res.send(response.toJson());
    }

    @get("/:number")
    public home(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = "Ok!" + req.params.number;
        res.send(response.toJson());
    }

}