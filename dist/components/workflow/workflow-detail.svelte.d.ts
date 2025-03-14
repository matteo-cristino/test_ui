import { SvelteComponentTyped } from "svelte";
import type { IconName } from '../../holocene/icon';
declare const __propDef: {
    props: {
        title?: string;
        content: string;
        copyable?: boolean;
        href?: string;
        textSize?: string;
        icon?: IconName | undefined;
        tooltip?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WorkflowDetailProps = typeof __propDef.props;
export type WorkflowDetailEvents = typeof __propDef.events;
export type WorkflowDetailSlots = typeof __propDef.slots;
export default class WorkflowDetail extends SvelteComponentTyped<WorkflowDetailProps, WorkflowDetailEvents, WorkflowDetailSlots> {
}
export {};
