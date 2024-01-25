import { Injectable } from "@nestjs/common";

@Injectable()

export class ModService {
    details = ()=> {return "Hello I am from service part of module."};
}