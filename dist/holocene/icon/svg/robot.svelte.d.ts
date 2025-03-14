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
export type RobotProps = typeof __propDef.props;
export type RobotEvents = typeof __propDef.events;
export type RobotSlots = typeof __propDef.slots;
export default class Robot extends SvelteComponentTyped<RobotProps, RobotEvents, RobotSlots> {
}
export {};
