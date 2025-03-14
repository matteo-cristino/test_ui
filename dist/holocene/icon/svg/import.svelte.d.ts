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
export type ImportProps = typeof __propDef.props;
export type ImportEvents = typeof __propDef.events;
export type ImportSlots = typeof __propDef.slots;
export default class Import extends SvelteComponentTyped<ImportProps, ImportEvents, ImportSlots> {
}
export {};
