import path from "path";
const replaceFiles = (replacements) => {
    const projectRoot = process.cwd();
    replacements = replacements === null || replacements === void 0 ? void 0 : replacements.map((x) => ({
        file: path.join(projectRoot, x.file),
        replacement: path.join(projectRoot, x.replacement),
    }));
    return {
        name: "vite-plugin-replace-files",
        enforce: "pre",
        async resolveId(source, importer, options) {
            const resolvedFile = await this.resolve(source, importer, Object.assign(Object.assign({}, options), { skipSelf: true }));
            const foundReplacementFile = replacements === null || replacements === void 0 ? void 0 : replacements.find((replacement) => replacement.file == (resolvedFile === null || resolvedFile === void 0 ? void 0 : resolvedFile.id));
            if (foundReplacementFile) {
                return {
                    id: foundReplacementFile.replacement,
                };
            }
            return null;
        },
    };
};
export default replaceFiles;
