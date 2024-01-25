import {Controller, Get} from "@nestjs/common";

@Controller()
export class ContCheckController {
    @Get()
    checkController() {
        return "Hello I'm controller check. Am i alive";
    }
}

