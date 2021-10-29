export = binary;

declare namespace binary {
    interface Binary {
        homeDir: string;
        binaryDir?: string;
        env?: Record<string, string>;
        version(): Promise<string>;
    }
}
