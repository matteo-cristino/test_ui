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
export type JsonProps = typeof __propDef.props;
export type JsonEvents = typeof __propDef.events;
export type JsonSlots = typeof __propDef.slots;
export default class Json extends SvelteComponentTyped<JsonProps, JsonEvents, JsonSlots> {
}
export {};
