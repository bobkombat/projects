// Write your classes here! ✨
// You'll need to export them so the tests can run them.
interface Consumed {
	evil: boolean;
	name: string;
	power: number;
}

export abstract class Horror {
	#consumed: Consumed[] = [];

	protected abstract readonly name: string;

	#consume(opponent: Horror) {
		this.#consumed.push({
			evil: opponent.isEvil(),
			name: opponent.name,
			power: opponent.getPower(),
		});
	}

	doBattle(Opponent: Horror) {
		if (this.getPower() >= Opponent.getPower()) {
			this.#consume(Opponent);
		}
	}

	getPower() {
		return this.#consumed.reduce(
			(previous, consumed) => previous + this.getPowerFrom(consumed),
			this.#consumed.length
		);
	}

	protected abstract getPowerFrom(consumed: Consumed): number;
	protected abstract isEvil(): boolean;
}

export class Demon extends Horror {
	protected readonly name = "Demon";

	constructor() {
		super();
	}

	protected getPowerFrom(consumed: Consumed): number {
		return consumed.evil ? consumed.power / 2 : consumed.power * 2;
	}

	protected isEvil(): boolean {
		return true;
	}
}

export class Sorcerer extends Horror {
	protected readonly name: string;
	#evil: boolean;

	constructor(name: string, evil: boolean) {
		super();
		this.name = name;
		this.#evil = evil;
	}

	protected getPowerFrom(consumed: Consumed): number {
		return consumed.evil === this.#evil ? consumed.power * 2 : consumed.power;
	}

	protected isEvil(): boolean {
		return this.#evil;
	}
}
