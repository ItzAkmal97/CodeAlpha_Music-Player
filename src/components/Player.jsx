/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function Player({ 
  isPlaying, 
  selectedTrack, 
  audioRef, 
  onPlayPause, 
  onNext, 
  onPrevious, 
  onShuffle,
  isShuffle,
  isRepeat,
  onRepeat
}) {

  const disableBtn = !selectedTrack;
  let cssClassRepeat = isRepeat ? "text-gray-800 font-bold text-sm px-2 py-1 rounded-full mx-4 w-16" : "text-gray-500 font-bold text-sm px-2 py-1 rounded-full mx-4 w-16";
  let cssClassShuffle = isShuffle ? "text-gray-800 font-bold text-sm px-2 py-1 rounded-full mx-4 w-16" : "text-gray-500 font-bold text-sm px-2 py-1 rounded-full mx-4 w-16";
  return (
    <div>
      {/* Display the selected track's cover, name, and artist */}
      <section className="h-[30vh] bg-gray-100 overflow-auto rounded-tl-lg rounded-tr-lg">
        {selectedTrack && (
          <div className="flex flex-col justify-center items-center mt-12">
            <img src={selectedTrack.img} alt="song cover" className="h-36 w-36"/>
            <h2 className="text-2xl font-bold">{selectedTrack.name}</h2>
            <span>{selectedTrack.artist}</span>
          </div>
        )}
      </section>
      {/* Display the audio player */}
      {selectedTrack ? (
        <audio
          className="w-full bg-gray-100 flex items-end gap-4 overflow-auto p-4 hide-playback-controls"
          ref={audioRef}
          src={selectedTrack.src}
          controls
          autoPlay
          controlsList="nodownload"
          onEnded={onNext}
          loop = {isRepeat ? true : undefined}
        />
      ) : (
        <audio
          className="w-full bg-gray-100 flex items-end gap-4 overflow-auto p-4 hide-playback-controls"
          ref={audioRef}
          controls
          autoPlay
          controlsList="noremoteplayback"
          preload="auto"
        />
      )}
      
      {/* Display the next, previous, shuffle, and play/pause buttons */}
      <section className="bg-stone-200 flex justify-center">
        <div className="my-5 flex items-center md:flex flex-wrap">
          <button className={cssClassShuffle} onClick={onShuffle}>{isShuffle ? 'Unshuffle' : 'Shuffle'}</button>
          <button disabled={disableBtn} className="bg-white px-2 py-1 rounded-full mx-4 w-20" onClick={onPrevious}>Previous</button>
          <button disabled={disableBtn} className="bg-white px-6 py-2 rounded-full font-bold mx-4 w-24" onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button disabled={disableBtn} className="bg-white px-2 py-1 rounded-full mx-4 w-20" onClick={onNext}>Next</button>
          <button className={cssClassRepeat} onClick={onRepeat}>{isRepeat ? 'On Repeat' : 'Repeat'}</button>
        </div>
      </section>
    </div>
  );
}
