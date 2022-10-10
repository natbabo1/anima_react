import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useModal } from '../../contexts/ModalContext';
import { useLoading } from '../../contexts/LoadingContext';
import * as miscService from '../../api/miscApi';
import AnimeCard from '../../components/ui/card/AnimeCard';
import TypeButton from './animeFormComponent/TypeButton';
import EditRatingForm from './animeFormComponent/EditRatingForm';
import EditStudioForm from './animeFormComponent/EditStudioForm';
import GenreSelector from './animeFormComponent/GenreSelector';

function AnimeForm({ animeToEdit, onSubmit, onCancel, onDelete }) {
  const { openFormModal } = useModal();
  const { startLoading, stopLoading } = useLoading();

  const [newAnime, setNewAnime] = useState(
    animeToEdit || {
      type: 'TV',
      coverImage: null,
      highlightImage: null,
      title: '',
      year: +new Date().getFullYear(),
      duration: 24,
      season: 'spring',
      ratingId: 1,
      studioId: 1,
      synopsis: '',
      Genres: [],
      publishStatus: false
    }
  );

  const [ratings, setRatings] = useState([]);
  const [studios, setStudios] = useState([]);

  const fetchRatings = async () => {
    const {
      data: { ratings }
    } = await miscService.getRatings();

    setRatings(ratings);
  };
  const fetchStudios = async () => {
    const {
      data: { studios }
    } = await miscService.getStudios();
    setStudios(studios);
  };

  useEffect(() => {
    fetchRatings();
    fetchStudios();
  }, []);

  const handleOnChange = (e) =>
    setNewAnime({ ...newAnime, [e.target.name]: e.target.value });

  const handleChangeType = (type) => {
    if (type === 'TV') {
      return setNewAnime({
        ...newAnime,
        type,
        season: 'spring'
      });
    }
    return setNewAnime({ ...newAnime, type, season: 'none' });
  };

  const handleSelectGenre = (genres) => {
    setNewAnime({ ...newAnime, Genres: genres });
  };

  const handleToggleStatus = (e) => {
    setNewAnime({ ...newAnime, publishStatus: e.target.checked });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    try {
      const formData = new FormData();
      for (const key in newAnime) {
        if (key === 'Genres') {
          formData.append(key, JSON.stringify(newAnime[key]));
          continue;
        }
        formData.append(key, newAnime[key]);
      }
      await onSubmit(formData);
      toast.success(
        animeToEdit ? 'Edit Anime Success' : 'Add New Anime Success'
      );
      setNewAnime({
        type: 'TV',
        coverImage: null,
        highlightImage: null,
        title: '',
        year: +new Date().getFullYear(),
        duration: 24,
        season: 'spring',
        ratingId: 1,
        studioId: 1,
        synopsis: '',
        Genres: [],
        publishStatus: false
      });
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      className="text-snow-white pt-10 mb-4 mx-20"
      onSubmit={handleOnSubmit}
    >
      <div className="text-2xl ml-4 mb-2">
        {animeToEdit ? `Editing Anime Id: ${newAnime.id}` : 'New Anime'}
      </div>
      <div className="bg-dark-gray w-full flex rounded-xl">
        <div className="w-1/3 pt-10 pb-10">
          <div className="w-fit mx-auto">
            <AnimeCard
              anime={{
                ...newAnime,
                imagePath: newAnime.coverImage
                  ? newAnime.coverImage instanceof File
                    ? URL.createObjectURL(newAnime.coverImage)
                    : newAnime.coverImage
                  : null
              }}
            />
          </div>
        </div>
        <div className="grow px-24 pt-8 flex flex-col text-xl">
          <TypeButton type={newAnime.type} selectType={handleChangeType} />
          {/* {Title} */}
          <div className="flex items-center mt-4">
            <span className="mr-6">Title: </span>
            <input
              type="text"
              placeholder="Title..."
              className="input-form text-lg"
              style={{ paddingTop: '0.5rem' }}
              name="title"
              value={newAnime.title}
              onChange={handleOnChange}
            />
          </div>
          {/* Season Year Rating */}
          <div className="w-full flex justify-start items-center mt-4">
            <span className="block mr-6">Season:</span>
            <select
              className="rounded-md w-28 px-3 mr-5 bg-medium-gray border-none text-low-white focus:outline focus:outline-anima-green/80 focus:ring-transparent"
              name="season"
              value={newAnime.season}
              onChange={handleOnChange}
            >
              {newAnime.type === 'TV' ? (
                <>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </>
              ) : null}
              <option value="none">None</option>
            </select>
            <span className="block mr-6">Year: </span>
            <input
              type="number"
              placeholder="Year..."
              className="input-form mr-5 text-lg appearance-none"
              style={{ paddingTop: 9, width: '5rem' }}
              name="year"
              value={newAnime.year}
              onChange={(e) =>
                setNewAnime({ ...newAnime, year: +e.target.value })
              }
            />
            <span className="block mr-6">Rating:</span>
            <select
              className="rounded-md px-3 mr-2 grow bg-medium-gray border-none text-low-white focus:outline focus:outline-anima-green/80 focus:ring-transparent"
              name="ratingId"
              value={newAnime.ratingId}
              onChange={(e) =>
                setNewAnime({ ...newAnime, ratingId: +e.target.value })
              }
            >
              {ratings.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.rating}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="button"
              onClick={() =>
                openFormModal({
                  header: 'Ratings',
                  body: (
                    <EditRatingForm
                      ratings={ratings}
                      updateRatings={fetchRatings}
                    />
                  )
                })
              }
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          {/* Studio Duration */}
          <div className="w-full flex justify-start items-center mt-4">
            <span className="block mr-6">Studio:</span>
            <select
              className="rounded-md px-3 mr-2 grow bg-medium-gray border-none text-low-white focus:outline focus:outline-anima-green/80 focus:ring-transparent"
              name="studioId"
              value={newAnime.studioId}
              onChange={(e) =>
                setNewAnime({ ...newAnime, studioId: +e.target.value })
              }
            >
              {studios.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="button mr-3"
              onClick={() =>
                openFormModal({
                  header: 'Studios',
                  body: (
                    <EditStudioForm
                      studios={studios}
                      updateStudios={fetchStudios}
                    />
                  )
                })
              }
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <span className="block mr-4">Duration: </span>
            <input
              type="number"
              placeholder="..."
              className="input-form mr-5 text-lg appearance-none"
              style={{ paddingTop: 9, width: '5rem' }}
              name="duration"
              value={newAnime.duration}
              onChange={(e) =>
                setNewAnime({ ...newAnime, duration: +e.target.value })
              }
            />
            <span className="block">mins</span>
          </div>
          {/* Image Upload */}
          <div className="flex items-center mt-4 justify-between">
            <label className="flex">
              <span className="block mr-5">Image: </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setNewAnime({ ...newAnime, coverImage: e.target.files[0] });
                  }
                }}
              />
              <div className="w-36 h-8 bg-anima-green rounded-full text-lg text-center flex items-center justify-center text-snow-white hover:text-dark-gray cursor-pointer">
                Choose Image
              </div>
            </label>
            <label className="flex">
              <span className="block mr-5">Highligth Image: </span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setNewAnime({
                      ...newAnime,
                      highlightImage: e.target.files[0]
                    });
                  }
                }}
              />
              <div className="w-36 h-8 bg-anima-green rounded-full text-lg text-center flex items-center justify-center text-snow-white hover:text-dark-gray cursor-pointer">
                Choose Image
              </div>
            </label>
          </div>
          {/* Toggle Publish Status */}
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
                checked={newAnime.publishStatus}
              />
              <div className="w-11 h-6 bg-medium-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-anima-green/40 rounded-full peer peer-checked:after:translate-x-0 peer-checked:after:border-shadow-grow after:content-[''] after:absolute after:top-[3px] after:right-[2px] after:-translate-x-full after:bg-dark-gray after:border-shadow-grow after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-anima-green"></div>
            </label>
          </div>
          <GenreSelector
            Genres={newAnime.Genres}
            selectGenre={handleSelectGenre}
          />
          <label
            htmlFor="message"
            className="block mb-2 mt-4 text-xl text-snow-white"
          >
            Synopsis:
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 mb-6 w-full text-xl text-snow-white bg-medium-gray rounded-lg focus:ring-transparent focus:border-anima-green "
            placeholder="Synopsis..."
            name="synopsis"
            value={newAnime.synopsis}
            onChange={handleOnChange}
          ></textarea>
        </div>
      </div>
      <button className="bg-transparent border-2 border-anima-green text-anima-green w-[90%] rounded-xl block mx-auto mt-6 py-4 hover:bg-anima-green hover:text-shadow-grow text-xl">
        {animeToEdit ? 'Confirm Editing Anime' : 'Add New Anime'}
      </button>
      {animeToEdit && (
        <>
          <button
            type="button"
            className="bg-medium-gray border-2 border-medium-gray  w-[90%] rounded-xl mx-auto mt-6 py-4 hover:bg-red-600 block hover:text-white hover:border-red-600 text-xl"
            onClick={onCancel}
          >
            Cancel Editing
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="bg-transparent border-2 border-red-800 w-[8%] rounded-xl ml-auto mt-6 py-4 hover:bg-red-600 block hover:text-white hover:border-red-600 text-xl"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </>
      )}
    </form>
  );
}

export default AnimeForm;
