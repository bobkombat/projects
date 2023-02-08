// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.
type Test = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(test: Test) {
	return (text: string) => {
		const { validateGuess, makeGuess, attempts } = test;

		for (let i = 0; i < attempts; i++) {
			const guessChar = makeGuess(text, i);

			if (validateGuess(guessChar)) {
				return guessChar;
			}
		}

		return undefined;
	};
}
