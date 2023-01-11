const { build } = require("esbuild");
const { Generator } = require("npm-dts");
const { devDependencies } = require("./package.json");

new Generator({
	entry: "src/index.ts",
	output: "lib/index.d.ts",
}).generate();

const sharedConfig = {
	entryPoints: ["src/index.ts"],
	bundle: true,
	minify: true,
	external: Object.keys(devDependencies),
};

build({
	...sharedConfig,
	platform: "node",
	outfile: "lib/index.js",
});

build({
	...sharedConfig,
	outfile: "lib/index.esm.js",
	platform: "neutral",
	format: "esm",
});
