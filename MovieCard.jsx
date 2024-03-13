import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddtoWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
      
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300  hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path}`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleRemoveFromWatchlist(movieObj)} className="bg-gray-900/60 rounded-xl">
          &#10060;
          </div>
      ) : (
        <div
        onClick={() => handleAddtoWatchlist(movieObj)}
          className="bg-gray-900/60 rounded-xl"
        >
          &#128525;
        </div>
      )}

      <div className="mt-4 flex justify-center text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
