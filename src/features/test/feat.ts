import ModuleContainer from "common/module-container";

export interface TestController {
    getResult(): void;
}

export const TestController =
	ModuleContainer.define<TestController>('TEST_CONTROLLER');
    