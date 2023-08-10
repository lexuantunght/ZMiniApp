import { TestController } from "./feat";

export class TestControllerImpl implements TestController {
    getResult() {
        console.log("test ok");
    }
}
