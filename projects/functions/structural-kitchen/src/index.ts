// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.
export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Cleaner = (dirt: number, time?: number) => number;

export type Supplier = (expense: number) => Stock;

export type Recipe = (
	recipe: Stock
) => { succeeded: false } | { succeeded: true; newStock: Stock };

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt: number = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce: () =>
			`I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`,
		clean: (time?: number) => (dirt = cleaner(dirt, time)),
		purchase: (expense: number) => {
			if (budget < expense) return false;

			const reStock = supplier(expense);

			for (const [key, value] of Object.entries(reStock)) {
				stock[key as keyof Stock] += value;
			}

			budget -= expense;

			return true;
		},
		prepare: (recipe) => {
			if (dirt >= 100) return false;

			const preparing = recipe(stock);
			dirt++;

			if (preparing.succeeded) {
				stock = preparing.newStock;

				return true;
			} else {
				return false;
			}
		},
	};
}
