import {Controller, Get, Res} from "@nestjs/common";
import {Response} from "express";


@Controller("/result")

export class ResultController {
    @Get()
    getResult(@Res() res : Response){
        res.send("<h1>Hello world!</h1>");
    }
}