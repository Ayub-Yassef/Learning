var player = {
    currentSong: "Torn",
    currentSongLength: 35000,
    playNext: function () { return console.log('Playing next'); },
    playPrevious: function () { return console.log('Playing previous'); },
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log('Playing next'); };
        this.playPrevious = function () { return console.log('Playing previous'); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: 'Il y Aura', length: 40000 });
var anotherAudioPlayer = new AudioPlayer({ name: 'Survivor', length: 45000 });
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
