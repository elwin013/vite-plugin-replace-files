import type { PluginOption } from "vite";
import path from "path";

interface Replacement {
  file: string;
  replacement: string;
}

const replaceFiles = (replacements?: Replacement[]): PluginOption => {
  const projectRoot = process.cwd();
  replacements = replacements?.map(
    (x) =>
      <Replacement>{
        file: path.normalize(path.join(projectRoot, x.file)),
        replacement: path.normalize(path.join(projectRoot, x.replacement)),
      }
  );

  return {
    name: "vite-plugin-replace-files",
    enforce: "pre",
    async resolveId(
      source: string,
      importer: string | undefined,
      options: any
    ) {
      const resolvedFile = await this.resolve(source, importer, {
        ...options,
        ...{ skipSelf: true },
      });

      if (!resolvedFile) {
        return null;
      }

      const resolvedFileId = path.normalize(resolvedFile?.id);

      const foundReplacementFile = replacements?.find(
        (replacement) => replacement.file == resolvedFileId
      );

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
