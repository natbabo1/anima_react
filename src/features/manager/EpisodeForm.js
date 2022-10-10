import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import EpisodeCard from '../../components/ui/card/EpisodeCard';
import { useLoading } from '../../contexts/LoadingContext';

function EpisodeForm({ episodeToEdit, animeId, onDelete, onCancel, onSubmit }) {
  const initEpisode = {
    number: '',
    title: '',
    imagePath: null,
    videoPath: null,
    publishStatus: false,
    animeId
  };

  const { startLoading, stopLoading } = useLoading();

  const [newEpisode, setNewEpisode] = useState(episodeToEdit || initEpisode);

  const coverImage = useRef();
  const video = useRef();

  useEffect(() => {
    if (episodeToEdit) {
      setNewEpisode(episodeToEdit);
    }
  }, [episodeToEdit]);

  const handleOnChange = (e) => {
    setNewEpisode({ ...newEpisode, [e.target.name]: e.target.value });
  };

  const handleToggleStatus = (e) => {
    setNewEpisode({ ...newEpisode, publishStatus: e.target.checked });
  };

  const handleClickCancle = () => {
    setNewEpisode(initEpisode);
    onCancel();
  };

  const handleClickDelete = () => {
    setNewEpisode(initEpisode);
    onDelete();
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const formData = new FormData();
      for (const key in newEpisode) {
        formData.append(key, newEpisode[key]);
      }
      await onSubmit(formData);
      toast.success(
        episodeToEdit ? 'Edit Episode Success' : 'Add New Episode Success'
      );
      setNewEpisode(initEpisode);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      className="text-snow-white pt-10 mb-16 mx-20"
      onSubmit={handleOnSubmit}
    >
      <div className="text-2xl ml-4 mb-2">
        {episodeToEdit
          ? `Editing Episode No.: ${newEpisode.number}`
          : 'New Episode'}
      </div>
      <div className="bg-dark-gray w-full flex rounded-xl ">
        <div className="w-1/3 pt-10 pb-10 flex items-center">
          <div className="w-fit mx-auto">
            <EpisodeCard
              episode={{
                ...newEpisode,
                imagePath:
                  newEpisode.imagePath instanceof File
                    ? URL.createObjectURL(newEpisode.imagePath)
                    : newEpisode.imagePath
              }}
            />
          </div>
        </div>
        <div className="grow px-24 pt-8 flex flex-col text-xl">
          <div className="flex items-center mt-4">
            <span className="mr-6">Episode No.: </span>
            <input
              type="number"
              placeholder="Episode No...."
              className="input-form text-lg"
              style={{ paddingTop: '0.5rem', width: '24' }}
              name="number"
              value={newEpisode.number}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center mt-4">
            <span className="mr-6">Title: </span>
            <input
              type="text"
              placeholder="Title..."
              className="input-form text-lg"
              style={{ paddingTop: '0.5rem' }}
              name="title"
              value={newEpisode.title}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center mt-4 justify-start gap-14">
            <label className="flex">
              <span className="block mr-5">Cover Image: </span>
              <input
                type="file"
                ref={coverImage}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setNewEpisode({
                      ...newEpisode,
                      imagePath: e.target.files[0]
                    });
                  }
                }}
              />
              <div className="w-36 h-8 bg-anima-green rounded-full text-lg text-center flex items-center justify-center text-snow-white hover:text-dark-gray cursor-pointer">
                Choose Image
              </div>
              <div className="ml-3 w-24">
                {coverImage.current?.files[0]
                  ? coverImage.current.files[0].name
                  : ''}
              </div>
            </label>
            <label className="flex">
              <span className="block mr-5">Video: </span>
              <input
                type="file"
                ref={video}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setNewEpisode({
                      ...newEpisode,
                      videoPath: e.target.files[0]
                    });
                  }
                }}
              />
              <div className="w-36 h-8 bg-anima-green rounded-full text-lg text-center flex items-center justify-center text-snow-white hover:text-dark-gray cursor-pointer">
                Choose Video
              </div>
              <div className="ml-3 w-24">
                {video.current?.files[0] ? video.current.files[0].name : ''}
              </div>
            </label>
          </div>
          <div className="flex items-center mt-4 justify-start">
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <span className="ml-0 text-xl font-medium text-snow-white mr-4">
                Publish Status:
              </span>
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
                onChange={handleToggleStatus}
                checked={newEpisode.publishStatus}
              />
              <div className="w-11 h-6 bg-medium-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-anima-green/40 rounded-full peer peer-checked:after:translate-x-0 peer-checked:after:border-shadow-grow after:content-[''] after:absolute after:top-[3px] after:right-[2px] after:-translate-x-full after:bg-dark-gray after:border-shadow-grow after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-anima-green"></div>
            </label>
          </div>
          <button className="bg-transparent border-2 border-anima-green text-anima-green w-[90%] rounded-xl block mx-auto mt-10 py-4 hover:bg-anima-green hover:text-shadow-grow text-xl mb-4">
            {episodeToEdit ? 'Confirm Editing Episode' : 'Add Episode'}
          </button>
          {episodeToEdit && (
            <div className="flex w-[90%] mx-auto items-center">
              <button
                type="button"
                className="bg-medium-gray border-2 border-medium-gray  w-[90%] rounded-xl mx-auto h-fit py-4 hover:bg-red-600 block hover:text-white hover:border-red-600 shrink text-xl"
                onClick={handleClickCancle}
              >
                Cancel Editing
              </button>
              <button
                type="button"
                onClick={handleClickDelete}
                className="bg-transparent border-2 border-red-800 w-[8%] rounded-xl ml-auto py-4 hover:bg-red-600 block hover:text-white hover:border-red-600 text-xl"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default EpisodeForm;
