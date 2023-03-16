// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
type AlignTextOption = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(
	texts: string[],
	options: AlignTextOption
): string[][] {
	const alignedText: string[][] = [];
	const { align = "left", width } = options;

	function formatText(text: string, widthDiff: number) {
		if (align === "left") {
			return `${text}${" ".repeat(widthDiff)}`;
		} else if (align === "right") {
			return `${" ".repeat(widthDiff)}${text}`;
		} else {
			return `${" ".repeat(Math.floor(widthDiff / 2))}${text}${" ".repeat(
				Math.ceil(widthDiff / 2)
			)}`;
		}
	}

	for (let i = 0; i < texts.length; i++) {
		if (texts[i].length <= width) {
			const widthDiff = Math.abs(width - texts[i].length);
			alignedText.push([formatText(texts[i], widthDiff)]);

			continue;
		}

		const splitText = texts[i].split(" ");
		alignedText.push([]);

		for (let j = 0; j < splitText.length; j++) {
			const widthDiff =
				width - splitText[j].length < 0 ? 0 : width - splitText[j].length;
			alignedText[i].push(formatText(splitText[j], widthDiff));
		}
	}

	return alignedText;
}
