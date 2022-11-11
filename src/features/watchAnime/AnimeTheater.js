import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoading } from "../../contexts/LoadingContext";
import CarouselFrame from "../../components/ui/carousel/CarouselFrame";
import EpisodeCard from "../../components/ui/card/EpisodeCard";
import TheaterSke from "../../components/ui/skeletons/TheaterSke";
import EpisodeCardSke from "../../components/ui/skeletons/EpisodeCardSke";
import Theater from "../../components/ui/Theater";
import * as episodeService from "../../api/episodeApi";
import * as tierService from "../../api/tierApi";
import { BASE_URL } from "../../config/env";
import {
  addVpassToken,
  getVpassToken,
  removeVpassToken
} from "../../utilities/localStorage";

const initialEpisodes = [
  <EpisodeCardSke key={"skeHightlight01"} />,
  <EpisodeCardSke key={"skeHightlight02"} />,
  <EpisodeCardSke key={"skeHightlight03"} />,
  <EpisodeCardSke key={"skeHightlight04"} />
];
function AnimeTheater() {
  const { animeId, epNumber } = useParams();

  const { startLoading, stopLoading } = useLoading();

  const [episodeList, setEpisodeList] = useState(null);
  const [currentEpSrc, setCurrentEpSrc] = useState(null);
  const [activeVpass, setActiveVpass] = useState(getVpassToken());

  useEffect(() => {
    const fetchEpisodeList = async () => {
      try {
        startLoading();
        window.scrollTo(0, 0);
        const {
          data: { episodes }
        } = await episodeService.getEpisodeList(animeId);
        setEpisodeList(episodes);
      } catch (err) {
        toast.error(err.response?.data.message);
      } finally {
        stopLoading();
      }
    };

    fetchEpisodeList();
  }, [startLoading, stopLoading, animeId]);

  useEffect(() => {
    if (episodeList) {
      const thisEp = episodeList.find((item) => +item.number === +epNumber);
      if (thisEp) {
        return setCurrentEpSrc(BASE_URL + "/" + thisEp.videoPath);
      }
      return setCurrentEpSrc(null);
    }
  }, [epNumber, episodeList]);

  useEffect(() => {
    const fetchVpass = async () => {
      try {
        const vpass = getVpassToken();
        startLoading();
        if (vpass) {
          const {
            data: { isExpired }
          } = await tierService.checkVpass(vpass);
          if (!isExpired) {
            return setActiveVpass(vpass);
          }
        }

        const {
          data: { vpass: newVpass, isNotSub }
        } = await tierService.getVpass();

        if (isNotSub) {
          removeVpassToken();
          return setActiveVpass(null);
        }

        addVpassToken(newVpass);
        setActiveVpass(newVpass);
      } catch (err) {
        console.log(err);
        if (err.response?.data?.message !== "you are unauthorized")
          toast.error(err.response?.data?.message);
      } finally {
        stopLoading();
      }
    };

    fetchVpass();
  }, [startLoading, stopLoading]);

  return (
    <>
      {!episodeList ? (
        <TheaterSke />
      ) : (
        <Theater key={currentEpSrc} src={currentEpSrc} vpass={activeVpass} />
      )}
      <div className="h-56 mt-24">
        <CarouselFrame
          content={
            !episodeList || episodeList.length === 0
              ? initialEpisodes
              : episodeList.map((item, idx) => (
                  <EpisodeCard
                    key={idx}
                    episode={item}
                    to={`/animes/${item.animeId}/ep/${item.number}`}
                  />
                ))
          }
          perPage={4}
        />
      </div>
    </>
  );
}

export default AnimeTheater;
