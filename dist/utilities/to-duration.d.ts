type DurationKey = keyof Duration;
export declare const durationKeys: Readonly<DurationKey[]>;
export declare const durations: string[];
export declare const columnOrderedDurations: string[];
export declare const isDurationKey: (key: unknown) => key is keyof Duration;
export declare const isDuration: (value: unknown) => value is Duration;
export declare const isDurationString: (value: unknown) => value is string;
export declare const tomorrow: (date?: Date) => string;
export declare const toDuration: (value: string) => Duration;
export declare const toString: (duration: Duration) => string;
export declare const toDate: (timeRange: Duration | string) => string;
export declare const fromDate: (start: string | Date, end?: string | Date) => Duration;
export declare const fromSeconds: (seconds: string, { delimiter }?: {
    delimiter?: string;
}) => string;
export declare const isValidDurationQuery: (value: string) => boolean;
export {};
