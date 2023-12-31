import { UserConfig as UserConfig$1, ConfigEnv } from 'vite';
export { ConfigEnv, UserConfig, mergeConfig } from 'vite';
import { a1 as ResolvedCoverageOptions, q as UserConfig, a5 as CoverageV8Options, a4 as CoverageC8Options, a6 as CustomProviderOptions, a3 as CoverageIstanbulOptions, aj as HtmlOptions, ak as FileOptions, al as CloverOptions, am as CoberturaOptions, an as HtmlSpaOptions, ao as LcovOptions, ap as LcovOnlyOptions, aq as TeamcityOptions, ar as TextOptions, as as ProjectOptions, F as FakeTimerInstallOpts, P as ProjectConfig } from './types-2b1c412e.js';
import '@vitest/snapshot';
import '@vitest/expect';
import '@vitest/runner';
import '@vitest/runner/utils';
import '@vitest/utils';
import 'tinybench';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import 'node:worker_threads';
import 'vite-node';
import 'node:fs';
import 'chai';

declare const defaultInclude: string[];
declare const defaultExclude: string[];
declare const coverageConfigDefaults: ResolvedCoverageOptions;
declare const config: {
    allowOnly: boolean;
    watch: boolean;
    globals: boolean;
    environment: "node";
    threads: boolean;
    clearMocks: boolean;
    restoreMocks: boolean;
    mockReset: boolean;
    include: string[];
    exclude: string[];
    testTimeout: number;
    hookTimeout: number;
    teardownTimeout: number;
    isolate: boolean;
    watchExclude: string[];
    forceRerunTriggers: string[];
    update: boolean;
    reporters: never[];
    silent: boolean;
    hideSkippedTests: boolean;
    api: boolean;
    ui: boolean;
    uiBase: string;
    open: boolean;
    css: {
        include: never[];
    };
    coverage: {
        provider: "v8";
    } & CoverageV8Options & Required<Pick<({
        provider?: undefined;
    } & CoverageC8Options) | ({
        provider: "custom";
    } & CustomProviderOptions) | ({
        provider: "c8";
    } & CoverageC8Options) | ({
        provider: "v8";
    } & CoverageV8Options) | ({
        provider: "istanbul";
    } & CoverageIstanbulOptions), "exclude" | "enabled" | "clean" | "cleanOnRerun" | "reportsDirectory" | "extension" | "reportOnFailure">> & {
        reporter: (["html", Partial<HtmlOptions>] | ["none", {}] | ["json", Partial<FileOptions>] | ["clover", Partial<CloverOptions>] | ["cobertura", Partial<CoberturaOptions>] | ["html-spa", Partial<HtmlSpaOptions>] | ["json-summary", Partial<FileOptions>] | ["lcov", Partial<LcovOptions>] | ["lcovonly", Partial<LcovOnlyOptions>] | ["teamcity", Partial<TeamcityOptions>] | ["text", Partial<TextOptions>] | ["text-lcov", Partial<ProjectOptions>] | ["text-summary", Partial<FileOptions>])[];
    };
    fakeTimers: FakeTimerInstallOpts;
    maxConcurrency: number;
    dangerouslyIgnoreUnhandledErrors: boolean;
    typecheck: {
        checker: "tsc";
        include: string[];
        exclude: string[];
    };
    slowTestThreshold: number;
};
declare const configDefaults: Required<Pick<UserConfig, keyof typeof config>>;

interface UserWorkspaceConfig extends UserConfig$1 {
    test?: ProjectConfig;
}

type UserConfigFn = (env: ConfigEnv) => UserConfig$1 | Promise<UserConfig$1>;
type UserConfigExport = UserConfig$1 | Promise<UserConfig$1> | UserConfigFn;
type UserProjectConfigFn = (env: ConfigEnv) => UserWorkspaceConfig | Promise<UserWorkspaceConfig>;
type UserProjectConfigExport = UserWorkspaceConfig | Promise<UserWorkspaceConfig> | UserProjectConfigFn;
declare function defineConfig(config: UserConfigExport): UserConfigExport;
declare function defineProject(config: UserProjectConfigExport): UserProjectConfigExport;
declare function defineWorkspace(config: (string | (UserProjectConfigExport & {
    extends?: string;
}))[]): (string | (UserProjectConfigExport & {
    extends?: string | undefined;
}))[];

export { UserConfigExport, UserConfigFn, UserProjectConfigExport, UserProjectConfigFn, UserWorkspaceConfig, configDefaults, coverageConfigDefaults, defaultExclude, defaultInclude, defineConfig, defineProject, defineWorkspace };
