#!/usr/bin/env node
require("esbuild")
    .build({
        logLevel: "info",
        entryPoints: ["src/index.js"],
        bundle: true,
        outfile: "www/main.js",
    })
    .catch(() => process.exit(1));