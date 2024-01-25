import { Injectable } from "@nestjs/common";

@Injectable()
export class ServeService {
    info = ()=> {return "I am information box."};
}
