import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const monorepoRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

const nextConfig: NextConfig = {
  turbopack: {
    root: monorepoRoot,
  },
};

export default nextConfig;
