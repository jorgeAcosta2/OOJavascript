var playlist = new Playlist();
var hereComesTheSun = new Song("Here Comes The Sun","The Beatles","2:54");
var walkingOnSunshine = new Song("Walking On Sunshine","Katrina And The Waves","3:43");

var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");

playlist.renderIn(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function (){
    playlist.play();
    playlist.renderIn(playlistElement);

}
var nextButton = document.getElementById('next');
nextButton.onclick = function (){
    playlist.next();
    playlist.renderIn(playlistElement);

}
var stopButton = document.getElementById('stop');
stopButton.onclick = function (){
    playlist.stop();
    playlist.renderIn(playlistElement);

}
