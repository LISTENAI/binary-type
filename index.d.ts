export = binary;

declare namespace binary {
    interface Binary {
        homeDir: string;
        binaryDir: string;
        libraryDir?: string;
        env?: Record<string, string>;
        version(): Promise<string>;
    }
}
