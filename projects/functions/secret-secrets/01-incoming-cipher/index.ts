// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type Cipher = (text: string) => string;

export function createCipher(cipher: Cipher) {
	return (text: string) => {
		let string = "";

		for (const char of text) {
			string += cipher(char);
		}

		return string;
	};
}
