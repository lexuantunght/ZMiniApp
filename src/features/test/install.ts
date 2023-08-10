import ModuleContainer from "common/module-container";
import { TestController } from "./feat";
import { TestControllerImpl } from "./feat.imp";

ModuleContainer.registerSingleton(TestController, TestControllerImpl);
