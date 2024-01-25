import {Controller, Inject} from "@nestjs/common";

@Controller()
export class ValueUserController {
    constructor(@Inject("VALUE_BASED") private data : string){
        console.log(data);
    }
}
