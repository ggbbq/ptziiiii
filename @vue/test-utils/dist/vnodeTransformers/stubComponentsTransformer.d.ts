import { VTUVNodeTypeTransformer } from './util';
import { Teleport, KeepAlive, VNodeTypes, ConcreteComponent, DefineComponent, Component } from 'vue';
export type CustomCreateStub = (params: {
    name: string;
    component: ConcreteComponent;
}) => ConcreteComponent;
interface StubOptions {
    name: string;
    type?: VNodeTypes | typeof Teleport | typeof KeepAlive;
    renderStubDefaultSlot?: boolean;
}
export declare const createStub: ({ name, type, renderStubDefaultSlot }: StubOptions) => DefineComponent;
export interface CreateStubComponentsTransformerConfig {
    rootComponents: {
        component?: Component;
        functional?: Component;
    };
    stubs?: Record<string, Component | boolean>;
    shallow?: boolean;
    renderStubDefaultSlot: boolean;
}
export declare function createStubComponentsTransformer({ rootComponents, stubs, shallow, renderStubDefaultSlot }: CreateStubComponentsTransformerConfig): VTUVNodeTypeTransformer;
export {};
