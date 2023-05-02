// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.

interface Landmark {
	name: string;
}

interface Fort extends Landmark {
	type: "fort";
}

interface Lake extends Landmark {
	type: "lake";
	miles: number;
}

interface Lighthouse extends Landmark {
	type: "lighthouse";
	lit: number;
	height: number;
}

interface Mountain extends Landmark {
	type: "mountain";
	height: number;
}

interface Park extends Landmark {
	type: "park";
	acres: number;
}

interface River extends Landmark {
	type: "river";
	length: number;
	depth: number;
}

interface Waterfall extends Landmark {
	type: "waterfall";
	height: number;
}

type AllLandmark =
	| Fort
	| Lake
	| Lighthouse
	| Mountain
	| Park
	| River
	| Waterfall;

export function describeLandmark(landmark: AllLandmark) {
	const { type, name } = landmark;
	const landmarkDescription = [`${name} is a ${type} in Upstate New York.`];

	switch (type) {
		case "fort":
			break;
		case "lake":
			landmarkDescription.push(
				`It covers ${landmark.miles} square miles of water.`
			);
			break;
		case "lighthouse":
			landmarkDescription.push(
				`It was first lit in ${landmark.lit} and is ${landmark.height} feet high.`
			);
			break;
		case "mountain":
			landmarkDescription.push(`Its peak is ${landmark.height} feet high.`);
			break;
		case "park":
			landmarkDescription.push(`It covers ${landmark.acres} square acres.`);
			break;
		case "river":
			landmarkDescription.push(
				`It flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`
			);
			break;
		case "waterfall":
			landmarkDescription.push(`It is ${landmark.height} feet high.`);
			break;
		default:
			break;
	}

	return landmarkDescription.join("\n");
}
