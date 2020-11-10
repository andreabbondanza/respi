import { Resolver } from "dns";
import { Request, Response } from "express";
import { StandardResponse } from "standard-response";
import { ApiController } from "../common/ApiController";
import { controller, get } from "../common/Decorators";


@controller("/first")
export class HomeController extends ApiController
{
    @get("/second")
    public home2(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = this._lang?._("Hello!");
        console.log(response.data);
        res.send(response.toJson());
    }

    @get("/second/:number")
    public home(req: Request, res: Response): void
    {
        const response = new StandardResponse();
        response.data = "Ok!" + req.params.number;
        res.send(response.toJson());
    }

}