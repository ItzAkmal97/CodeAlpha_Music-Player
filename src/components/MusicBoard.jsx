import { SONGS } from "../songs";
import { useState, useRef} from 'react';
import TracksList from "./TracksList";
import Player from "./Player";

// MusicBoard component displays a music player with a list of tracks.
// It uses React hooks to manage state.
export default function MusicBoard() {
  // Initialize state variables
  const [selectedTrackId, setSelectedTrackId] = useState(null); // selectedTrackId is the id of the currently selected track
  const [isPlaying, setIsPlaying] = useState(false); // isPlaying indicates whether the audio is currently playing
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(); // audioRef is a reference to the audio element

  // handleTrackSelected is called when a track is selected.
  // It updates the selectedTrackId and starts playing the audio.
  function handleTrackSelected(id) {
    setSelectedTrackId(id);
    setIsPlaying(true);
  }

  function handleRepeat() {
    setIsRepeat(!isRepeat);
    console.log(!isRepeat);
  }
  
  // handleNextTrack is called when the next track button is clicked.
  // It selects the next track and starts playing it.
  function handleNextTrack() {
    if(isShuffle) {
      const shuffledTracks = [...SONGS].sort(() => Math.random() - 0.5);
      setSelectedTrackId(shuffledTracks[0].id);
      setIsPlaying(true);
    }  else {
      const index = SONGS.findIndex((track) => track.id === selectedTrackId);
      const nextTrack = SONGS[index + 1] || SONGS[0];
      setSelectedTrackId(nextTrack.id);
      setIsPlaying(true);
    }
  }

  // handlePreviousTrack is called when the previous track button is clicked.
  // It selects the previous track and starts playing it.
  function handlePreviousTrack() {
    const index = SONGS.findIndex((song) => song.id === selectedTrackId);
    const prevTrack = SONGS[index - 1] || SONGS[SONGS.length - 1];
    setSelectedTrackId(prevTrack.id);
    setIsPlaying(true);
  }

  // handleShuffle is called when the shuffle button is clicked.
  // It shuffles the SONGS and selects the first track.
  function handleShuffle() {
    setIsShuffle(!isShuffle);
    setIsPlaying(true);
    // console.log(isShuffle);
  }

  // handlePlayTrack is called when the play/pause button is clicked.
  // It starts or pauses the audio based on its current state.
  function handlePlayTrack() {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }

  // selectedTrack is the currently selected track object.
  const selectedTrack = SONGS.find((song) => song.id === selectedTrackId);

  // Render the MusicBoard component
  return (
    <div className='h-[90vh] w-[60vw] mt-20 sm:w-[60vw] lg:w-[40vw]'>
      {/* Display the selected track's cover, name, and artist */}
      <Player 
      isPlaying={isPlaying}
      selectedTrack={selectedTrack}
      audioRef={audioRef}
      onPlayPause={handlePlayTrack}
      onNext={handleNextTrack}
      onPrevious={handlePreviousTrack}
      onShuffle={handleShuffle}
      isShuffle={isShuffle}
      onRepeat={handleRepeat}
      isRepeat={isRepeat}
      />
      {/* Display the list of tracks */}
     <TracksList tracks={SONGS} selectedTrackId={selectedTrackId} onTrackSelected={handleTrackSelected}/>
    </div>
  );
}
