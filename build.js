const { build } = require("esbuild");
const { devDependencies } = require("./package.json");

const sharedConfig = {
	entryPoints: ["src/index.ts"],
	bundle: true,
	minify: true,
	logLevel: "info",
};

build({
	...sharedConfig,
	platform: "node",
	outdir: "lib",
	entryPoints: ["./src/index.ts"],
});

build({
	...sharedConfig,
	outfile: "lib/index.esm.js",
	platform: "neutral",
	format: "esm",
});
