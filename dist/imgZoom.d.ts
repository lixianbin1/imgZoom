export default imgZoom;
declare namespace imgZoom {
    export { Version };
    export { Title };
    export { Author };
    export function init(): {
        SetOption: typeof SetOption;
        SetTitle: typeof SetTitle;
        Open: typeof Open;
        Close: typeof Close;
        ThemeSwitch: typeof ThemeSwitch;
    };
}
declare var Version: string;
declare var Title: string;
declare var Author: string;
declare function SetOption(obj: any): void;
declare function SetTitle(title: any): void;
declare function Open(event: any): void;
declare function Close(): void;
declare function ThemeSwitch(type: any, event: any): void;
//# sourceMappingURL=imgZoom.d.ts.map