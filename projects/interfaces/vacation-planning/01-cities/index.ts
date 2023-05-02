// Write your describeCity function here! ✨
// You'll need to export it so the tests can run it.

type CoordinateDetail = [number, number, number];

interface Coordinates {
	north: CoordinateDetail;
	west: CoordinateDetail;
}

interface City {
	coordinates: Coordinates;
	name: string;
	catchphrase?: string;
}

export function describeCity(city: City) {
	const { name, coordinates, catchphrase } = city;

	const nameDescription = `${name}, New York\n`;
	const catchphrasesDescription = catchphrase ? `* "${catchphrase}"\n` : "";
	const coordinatesDescription = `* Located at ${coordinates.north[0]}°${
		coordinates.north[1]
	}'${
		coordinates.north[2] < 10
			? coordinates.north[2].toString().padStart(2, "0")
			: coordinates.north[2]
	}"N ${coordinates.west[0]}°${coordinates.west[1]}'${coordinates.west[2]}"W`;

	return nameDescription + catchphrasesDescription + coordinatesDescription;
}
