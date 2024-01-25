import { Controller, Get, Post, Body, Param, Put, Delete } from "@nestjs/common";

interface userData {
    id : number;
    name : string;
    age : number;
    designation : string;
}

let USERS = [];

@Controller("/crud")

export class CrudController {
    @Post("/adduser")
    addUser(@Body() body : userData){
        USERS.push(body);
        return "user added";
    }

    @Get("/getAllUser")
    getAllUser(){
        return USERS;
    }

    @Get("/getUser/:id")
    getSingleUser(@Param("id") id : userData){
        return USERS.find((user)=> +user.id === +id);
    }

    @Put("/updateUser/:id")
    updateUser(@Param("id") id: userData, @Body() body : userData){
        const useridx = USERS.findIndex((user)=> +user.id === +id);
        USERS[useridx] = body;
        return "user updated";
    }

    @Delete("/deleteUser/:id")
    deleteUser(@Param("id") id : userData){
        USERS = USERS.filter((user)=> +user.id != +id);
        return "user deleted";
    }
}
