import { execSync } from "child_process";
import { afterAll, expect, test } from "vitest";

afterAll(() => {
  execSync(`rm -rf __tests__/vite@*`);
});

test.each([["vite@3"], ["vite@4"], ["vite@5"], ["vite@6"]])("%s", (version) => {
  execSync(`cd __tests__ && pnpm dlx ${version} build --outDir ${version}`, {
    encoding: "utf-8",
  });

  var result = execSync(
    `grep -q \"replacement\" __tests__/${version}/assets/index*; [ $? -eq 0 ] && echo -n \"ok\" || echo -n \"not ok\"`,
    { encoding: "utf-8" }
  );

  expect(result).toBe("ok");
});
