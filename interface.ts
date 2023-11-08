interface Player{
    currentSong: string;
    currentSongLength: number;
    playNext: () => void;
    playPrevious: () => void;
}

const player: Player = {
    currentSong: "Torn",
    currentSongLength: 35000,
    playNext: () => console.log('Playing next'),
    playPrevious: () => console.log('Playing previous'),
}

type song = { name: string; length: number };

class AudioPlayer implements Player{
    currentSong: string;
    currentSongLength: number;

    constructor(songInfo: song){
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }

    playNext = () => console.log('Playing next');
    playPrevious = () => console.log('Playing previous');

    stopAudio = () => {}
}

const audioPlayer = new AudioPlayer({name: 'Il y Aura', length: 40000});
const anotherAudioPlayer = new AudioPlayer({name: 'Survivor', length: 45000});

console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);