import { Module } from '@nestjs/common';
import {ContCheckController} from "./controllerss/contcheck.controller";
import { ResultController } from './controllerss/result.controller';
import { UserController } from './providerss/user.controller';
import { CheckuserController } from './providerss/checkuser.controller';
import {CrudController} from "./crud/crud.controller";
import { ValueUserController } from './providerss/valueuser.controller';
import { ServeService } from './servicess/serve.service';
import { ServiceController } from './servicess/service.controller';
import { UserModule } from './modules/user.module';


@Module({
  imports: [UserModule],
  controllers: [ContCheckController,ResultController, CheckuserController, CrudController, ValueUserController, ServiceController],
  providers: [{provide : UserController, useClass : UserController},
     {provide : "VALUE_BASED", useValue : "Hi I am value based data"},
    {provide : ServeService, useClass : ServeService},
  ],
})

export class AppModule {}
