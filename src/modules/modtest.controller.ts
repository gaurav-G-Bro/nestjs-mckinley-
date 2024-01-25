import { Controller, Inject } from "@nestjs/common";
import {ModService} from "./mod.service";

@Controller()

export class ModtestController {
    constructor(@Inject(ModService) private data : ModService){
        console.log(data.details());
    }
}