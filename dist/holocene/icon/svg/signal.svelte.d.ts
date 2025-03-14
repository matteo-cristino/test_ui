import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SignalProps = typeof __propDef.props;
export type SignalEvents = typeof __propDef.events;
export type SignalSlots = typeof __propDef.slots;
export default class Signal extends SvelteComponentTyped<SignalProps, SignalEvents, SignalSlots> {
}
export {};
