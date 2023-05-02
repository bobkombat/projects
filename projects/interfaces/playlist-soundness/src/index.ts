// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
interface Song {
	artist: string[] | string;
	length: number;
	name: string;
	type: "song";
}

interface Album {
	songs: Song[];
	type: "album";
}

interface Playlist {
	resolve: () => Song[];
	type: "playlist";
}

interface UnrollPlaylist {
	artists: {
		[artist: string]: string[];
	};
	songs: string[];
	time: number;
}

function songBreakdown(song: Song, playlist: UnrollPlaylist): UnrollPlaylist {
	const { artist, name, length } = song;

	if (Array.isArray(artist)) {
		for (const eachArtist of artist) {
			playlist.artists[eachArtist] ??= [];
			playlist.artists[eachArtist].push(name);
		}

		playlist.songs.push(name);
		playlist.time += length;
	} else {
		playlist.artists[artist] ??= [];
		playlist.artists[artist].push(name);

		playlist.songs.push(name);
		playlist.time += length;
	}

	return playlist;
}

export function unrollPlaylist(
	items: (Song | Album | Playlist)[]
): UnrollPlaylist {
	let playlist: UnrollPlaylist = {
		artists: {},
		songs: [],
		time: 0,
	};

	for (const item of items) {
		switch (item.type) {
			case "song":
				playlist = songBreakdown(item, playlist);
				break;
			case "album":
				for (const song of item.songs) {
					playlist = songBreakdown(song, playlist);
				}
				break;
			case "playlist":
				const songs = item.resolve();
				for (const song of songs) {
					playlist = songBreakdown(song, playlist);
				}
				break;
		}
	}

	return playlist;
}
