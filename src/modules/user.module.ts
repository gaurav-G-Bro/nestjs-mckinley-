import {Module} from "@nestjs/common";
import { ModtestController } from "./modtest.controller";
import { ModService } from "./mod.service";

@Module({
    imports : [],
    controllers : [ModtestController],
    providers : [ModService],
    exports : []
})

export class UserModule { }
