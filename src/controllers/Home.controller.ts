import { NextFunction, Request, Response } from "express";
import { StandardResponse } from "standard-response";
import { ApiController } from "../common/ApiController";
import { Controller, Get, GetMiddleware } from "../common/Decorators";


@Controller("")
export class HomeController extends ApiController
{
    @GetMiddleware("")
    public homeMiddleware(req: Request, res: Response, next: NextFunction){
        console.log("Logging from home middleware! :)");
        next();
    }

    @Get("")
    public home2(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = this._lang?._("Hello!");
        console.log(response.data);
        res.send(response.toJson());
    }

    @Get("/:number")
    public home(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = "Ok!" + req.params.number;
        res.send(response.toJson());
    }

}