declare module '*.pcss' {
    interface IPostCssFile {
        [className: string]: string;
    }

    const cssFile: IPostCssFile;

    export = cssFile;
}
