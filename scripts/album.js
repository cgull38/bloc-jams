//Example album
var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21' },
        { title: 'Magenta', duration: '2:15' }
    ]
};

//Another Example Album
var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21' },
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15' }
    ]
};

var albumKendrick = {
    title: 'DAMN',
    artist: 'Kendrick Lamar',
    label: 'Interscope',
    year: '2017',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'BLOOD', duration: '1:58' },
        { title: 'DNA', duration: '3:05' },
        { title: 'YAH', duration: '2:40' },
        { title: 'ELEMENT', duration: '3:28' },
        { title: 'FEEL', duration: '3:34' }
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;

    return template;
};

//Assign the corresponding values of the album object's properties to the HTML elements.
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {

    //Set the value of the first child node of the given element.
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    //Set the value of the parent container to an empty string.
    albumSongList.innerHTML = '';
    //Loop through the songs from given album and add song info using createSongRow function.
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);


    var albumList = [albumPicasso, albumMarconi, albumKendrick];
    var index = 1;

    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albumList[index]);
        index++;
        if (index == albumList.length) {
            index = 0;
        }
    });
};
