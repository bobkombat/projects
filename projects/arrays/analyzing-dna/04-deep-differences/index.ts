// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(
	a: string[][],
	b: string[][]
): ((string | undefined)[] | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}

	const diffArray: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			diffArray.push(undefined);
			continue;
		}

		diffArray.push([]);

		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] === b[i][j]) {
				diffArray[i]?.push(a[i][j]);
			} else {
				diffArray[i]?.push(undefined);
			}
		}
	}

	return diffArray;
}
