import { SvelteComponentTyped } from "svelte";
import type { Timestamp } from '$types';
declare const __propDef: {
    props: {
        futureRuns?: Timestamp[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ScheduleUpcomingRunsProps = typeof __propDef.props;
export type ScheduleUpcomingRunsEvents = typeof __propDef.events;
export type ScheduleUpcomingRunsSlots = typeof __propDef.slots;
export default class ScheduleUpcomingRuns extends SvelteComponentTyped<ScheduleUpcomingRunsProps, ScheduleUpcomingRunsEvents, ScheduleUpcomingRunsSlots> {
}
export {};
