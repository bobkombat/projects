// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
interface Restaurants {
	city: string;
	name: string;
}

interface GroupedRestaurants {
	[x: string]: string[];
}

export function groupRestaurants(
	restaurants: Restaurants[]
): GroupedRestaurants {
	const groupedRestaurants: GroupedRestaurants = {};

	for (const restaurant of restaurants) {
		if (groupedRestaurants[restaurant.city]) {
			groupedRestaurants[restaurant.city].push(restaurant.name);
		} else {
			groupedRestaurants[restaurant.city] = [restaurant.name];
		}
	}

	return groupedRestaurants;
}
