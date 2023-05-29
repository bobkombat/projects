// Write your duel function and types below! ✨
// You'll need to export duel so the tests can run it.
export type MutationKey = keyof typeof mutationsLibrary;
export interface Hero {
	mutations: MutationKey[];
	name: string;
}
export interface Character {
	flying: boolean;
	name: string;
	power: number;
	toughness: number;
}

const mutationsLibrary = {
	energy: (hero: Character) => {
		hero.power *= 1.25;
		hero.flying = true;
	},
	healing: (hero: Character) => {
		hero.toughness *= 2;
	},
	luck: (hero: Character) => {
		hero.power *= 1.25;
		hero.toughness *= 1.25;
	},
	flight: (hero: Character) => {
		hero.flying = true;
	},
	strength: (hero: Character) => {
		hero.power *= 2;
	},
	wings: (hero: Character) => {
		hero.flying = true;
		hero.toughness *= 0.9;
	},
};

function createCharacter(name: string, mutations: MutationKey[]): Character {
	const character = {
		flying: false,
		name,
		power: 1,
		toughness: 1,
	};

	for (const mutation of mutations) {
		mutationsLibrary[mutation](character);
	}

	return character;
}

export function duel(
	good: Hero,
	bad: Hero
): readonly ["hero" | "villain", Character] {
	const goodChar = createCharacter(good.name, good.mutations);
	const badChar = createCharacter(bad.name, bad.mutations);

	return goodChar.power / badChar.toughness > badChar.power / goodChar.toughness
		? ["hero", goodChar]
		: ["villain", badChar];
}
