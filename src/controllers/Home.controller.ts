import { Resolver } from "dns";
import { Request, Response } from "express";
import { ApiController } from "../common/ApiController";
import { controller, get } from "../common/Decorators";

@controller("/first")
export class HomeController extends ApiController
{
    @get("/second/:number")
    public home(req: Request, res: Response): void
    {
        res.send("OK! " + req.params.number)
    }

}