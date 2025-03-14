import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ArrowUpProps = typeof __propDef.props;
export type ArrowUpEvents = typeof __propDef.events;
export type ArrowUpSlots = typeof __propDef.slots;
export default class ArrowUp extends SvelteComponentTyped<ArrowUpProps, ArrowUpEvents, ArrowUpSlots> {
}
export {};
