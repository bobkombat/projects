// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
type onCipher = (char: string) => string;

export function createAdvancedCipher(
	onVowel: onCipher,
	onConsonant: onCipher,
	onPunctuation: onCipher
) {
	return (text: string) => {
		let result = "";

		for (const char of text) {
			if (char.search(/[aeiou]/i) !== -1) {
				result += onVowel(char);
			} else if (char.search(/[bcdfghjklmnpqrstvwxyz]/i) !== -1) {
				result += onConsonant(char);
			} else {
				result += onPunctuation(char);
			}
		}

		return result;
	};
}
