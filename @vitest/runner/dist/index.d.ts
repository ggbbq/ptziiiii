import { V as VitestRunner } from './runner-0b317aff.js';
export { C as CancelReason, a as VitestRunnerConfig, c as VitestRunnerConstructor, b as VitestRunnerImportSource } from './runner-0b317aff.js';
import { T as Task, F as File, S as SuiteAPI, a as TestAPI, b as SuiteCollector, c as SuiteHooks, O as OnTestFailedHandler, d as Test } from './tasks-045d21eb.js';
export { D as DoneCallback, n as HookCleanupCallback, H as HookListener, R as RunMode, p as RuntimeContext, r as SequenceHooks, s as SequenceSetupFiles, k as Suite, o as SuiteFactory, f as TaskBase, h as TaskCustom, g as TaskMeta, i as TaskResult, j as TaskResultPack, e as TaskState, q as TestContext, l as TestFunction, m as TestOptions } from './tasks-045d21eb.js';
import { Awaitable } from '@vitest/utils';

declare function updateTask(task: Task, runner: VitestRunner): void;
declare function startTests(paths: string[], runner: VitestRunner): Promise<File[]>;

declare const suite: SuiteAPI;
declare const test: TestAPI;
declare const describe: SuiteAPI;
declare const it: TestAPI;
declare function getCurrentSuite<ExtraContext = {}>(): SuiteCollector<ExtraContext>;

declare function beforeAll(fn: SuiteHooks['beforeAll'][0], timeout?: number): void;
declare function afterAll(fn: SuiteHooks['afterAll'][0], timeout?: number): void;
declare function beforeEach<ExtraContext = {}>(fn: SuiteHooks<ExtraContext>['beforeEach'][0], timeout?: number): void;
declare function afterEach<ExtraContext = {}>(fn: SuiteHooks<ExtraContext>['afterEach'][0], timeout?: number): void;
declare const onTestFailed: (fn: OnTestFailedHandler) => void;

declare function setFn(key: Test, fn: (() => Awaitable<void>)): void;
declare function getFn<Task = Test>(key: Task): (() => Awaitable<void>);

declare function getCurrentTest(): Test<{}> | undefined;

export { File, OnTestFailedHandler, SuiteAPI, SuiteCollector, SuiteHooks, Task, Test, TestAPI, VitestRunner, afterAll, afterEach, beforeAll, beforeEach, describe, getCurrentSuite, getCurrentTest, getFn, it, onTestFailed, setFn, startTests, suite, test, updateTask };
