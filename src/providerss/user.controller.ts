import {Controller, Get, Post, Body, Injectable} from "@nestjs/common";
import { Datas } from "./datas";

const USERS = [];
@Controller("/user")
@Injectable()
export class UserController {
    @Post()
    sendUserData(@Body() body : Datas){
        USERS.push(body);
        console.log(USERS);
        return "success";
    }

    @Get("/getUserData")
    getUserData(){
        return USERS;
    }

    check = ()=> {return 'hello i am testing providers.'};
}