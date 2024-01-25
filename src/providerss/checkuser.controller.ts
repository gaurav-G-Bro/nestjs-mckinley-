import { Controller, Inject} from "@nestjs/common";
import { UserController } from "./user.controller";

@Controller("/tester")

export class CheckuserController {
    constructor(@Inject(UserController) data : UserController){
        console.log(data.check());
    }
}

