interface AudioPlayer {
    volume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    album: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    volume: 90,
    songDuration: 36,
    song: "Heavy Metal",
    details: {
        author: "Bring Me The Horizon",
        album: "Amo",
        year: 2019   
    }
}
/* const song = "I don't know you what to say";
const {song:anotherSong} = audioPlayer;
const {volume, songDuration:duration, details} = audioPlayer;
const {author, album, year} = details;

console.log(`The song "${anotherSong}" has a volume of ${volume} and a duration of ${duration} seconds.`);
console.log(`The author of the song is ${author} and it was released in the year ${year} under the album ${album}.`); */

const [, , trunks, gohan = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

console.log('Personajes:', trunks, gohan);

export {};