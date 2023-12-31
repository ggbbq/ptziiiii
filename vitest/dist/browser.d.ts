export { startTests } from '@vitest/runner';
import { a as ResolvedConfig, a0 as CoverageOptions, Y as CoverageProvider, _ as CoverageProviderModule } from './types-2b1c412e.js';
import '@vitest/snapshot';
import '@vitest/expect';
import 'vite';
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

declare function setupCommonEnv(config: ResolvedConfig): Promise<void>;

interface Loader {
    executeId: (id: string) => Promise<{
        default: CoverageProviderModule;
    }>;
}
declare function getCoverageProvider(options: CoverageOptions | undefined, loader: Loader): Promise<CoverageProvider | null>;
declare function startCoverageInsideWorker(options: CoverageOptions | undefined, loader: Loader): Promise<unknown>;
declare function takeCoverageInsideWorker(options: CoverageOptions | undefined, loader: Loader): Promise<unknown>;
declare function stopCoverageInsideWorker(options: CoverageOptions | undefined, loader: Loader): Promise<unknown>;

export { getCoverageProvider, setupCommonEnv, startCoverageInsideWorker, stopCoverageInsideWorker, takeCoverageInsideWorker };
