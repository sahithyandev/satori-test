const satori = require("satori").default;
const fs = require("fs/promises");

const InterFont = async () => {
	const fontBuffer = await fs.readFile(require.resolve("./Inter-Regular.ttf"));
	return {
		name: "Inter",
		data: fontBuffer,
	};
};

(async () => {
	const output = await satori(`<div style="font-size: 3rem">Hi!!</div>`, {
		width: 500,
		height: 500,
		fonts: [await InterFont()],
	});

	console.log(output);
})();
