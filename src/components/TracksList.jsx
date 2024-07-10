/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
export default function TracksList({ tracks, selectedTrackId, onTrackSelected }) {
  return (
    <div className='bg-gray-300 border'>
      <ol className="m-5 flex flex-col gap-5">
        {tracks.map((song) => {
          const cssClass = song.id === selectedTrackId ? " p-5 rounded flex items-center bg-gray-500" : "p-5 rounded flex items-center cursor-pointer hover:bg-gray-200";
          return (
            <li className={cssClass} key={song.id} onClick={() => onTrackSelected(song.id)}>
              <img className="h-20 w-20" src={song.img} alt={`${song.name} cover`} />
              <div className='flex flex-col justify-center p-4 gap-1'>
                <p className="font-bold">{song.name}</p>
                <p className="text-sm">{song.artist}</p>
              </div>
              <div className='ml-auto'>
                <p className="text-sm">{song.duration}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
