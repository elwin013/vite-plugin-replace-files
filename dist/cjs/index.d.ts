import type { PluginOption } from "vite";
interface Replacement {
    file: string;
    replacement: string;
}
declare const replaceFiles: (replacements?: Replacement[]) => PluginOption;
export default replaceFiles;
