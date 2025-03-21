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
export type SupportProps = typeof __propDef.props;
export type SupportEvents = typeof __propDef.events;
export type SupportSlots = typeof __propDef.slots;
export default class Support extends SvelteComponentTyped<SupportProps, SupportEvents, SupportSlots> {
}
export {};
