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
export type RocketShipProps = typeof __propDef.props;
export type RocketShipEvents = typeof __propDef.events;
export type RocketShipSlots = typeof __propDef.slots;
export default class RocketShip extends SvelteComponentTyped<RocketShipProps, RocketShipEvents, RocketShipSlots> {
}
export {};
