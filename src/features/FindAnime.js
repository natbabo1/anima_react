import React, { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as animeService from "../api/animeApi";
import AnimeCard from "../components/ui/card/AnimeCard";
import { useLoading } from "../contexts/LoadingContext";

function FindAnime() {
  const [searchParams] = useSearchParams();
  const searchTitleInit = useMemo(
    () => searchParams.get("title"),
    [searchParams]
  );

  const { startLoading, stopLoading } = useLoading();

  const [searchTitle, setSearchTitle] = useState(searchTitleInit);
  const [animes, setAnimes] = useState([]);

  const searchInput = useRef();

  console.dir(searchParams.get("title"));

  const handleSearchSubmit = async (e) => {
    try {
      e.preventDefault();
      startLoading();
      const {
        data: { animes: newAnimes }
      } = await animeService.searchAnimeByTitle(searchInput.current.value);
      setAnimes(newAnimes);
      setSearchTitle(searchInput.current.value);
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="text-snow-white pt-10 pb-36 mt-16">
      <form className="flex gap-3 ml-24 mb-10" onSubmit={handleSearchSubmit}>
        <input
          className="rounded-md border-none px-3 bg-medium-gray  focus:outline focus:outline-anima-green/80 caret-anima-green focus:ring-transparent"
          type="text"
          placeholder="Find anime to edit"
          ref={searchInput}
          defaultValue={searchTitleInit}
        />
        <button
          className="w-9 border-2 border-anima-green rounded-md aspect-square text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass text-anima-green"></i>
        </button>
        {searchTitle && (
          <h2 className="ml-4 text-3xl text-medium-gray">
            Search for//
            <span className="text-anima-green ml-8">{searchTitle}: </span>
            <span className="text-low-white ml-3">
              {animes.length} animes found
            </span>
          </h2>
        )}
      </form>
      <div className="w-full px-16 mx-auto flex flex-wrap mt-4 gap-x-3 gap-y-10 justify-around pd-10">
        {animes ? animes.map((anime) => <AnimeCard anime={anime} />) : ""}
      </div>
    </div>
  );
}

export default FindAnime;
