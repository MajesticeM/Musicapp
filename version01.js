//Version 01
//1) List of Albums
var musicAlbums=
{
    01:
    {
        albumTitle:'',
        artist:'',
        tracks:[' ', ' ', ' ',' ']
    },
    02:
    {
        albumTitle:'',
        artist:'',
        tracks:[' ', ' ', ' ',' ']
    },
    03:
    {
        albumTitle:'',
        artist:'',
        tracks:[' ', ' ', ' ',' ']
    },
    04:
    {
        albumTitle:'',
        artist:'',
        tracks:[' ', ' ', ' ',' ']
    }

};

//2)Adding an Album
var newAlbumNumber;
musicAlbums.newAlbumNumber.albumTitle=' ';
musicAlbums.newAlbumNumber.artist=' ';
musicAlbums.newAlbumNumber.tracks=[' ', ' ', ' ',' '];

//3)Deleting an Album
var AlbumNumber;
delete musicAlbums.AlbumNumber;

//4)Reading an Album
console.log(musicAlbums[AlbumNumber]);


//5)Updating an Album
var AlbumToUpdate;

for (let index = 0; index < musicAlbums.length; index++)
{
    if (AlbumToUpdate==index) 
    {
        musicAlbums.AlbumToUpdate.albumTitle=' ';
        musicAlbums.AlbumToUpdate.artist=' ';
        musicAlbums.AlbumToUpdate.tracks=[' ',' ',' '];
    }    
    else
    {
        console.log("Album Number does not exist yet");
    }
    
}
