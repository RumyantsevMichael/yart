// A hack to allow importing JSON files into TS code.
// See "scheme/shapes/index.ts" for usage.
declare module '*.json' {
    const value: any;
    export default value;
}
