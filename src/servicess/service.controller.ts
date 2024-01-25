import { Controller, Inject } from "@nestjs/common";
import { ServeService } from "./serve.service";


@Controller()

export class ServiceController {
    constructor(@Inject(ServeService) data : ServeService){
        console.log(data.info());
    }
}

