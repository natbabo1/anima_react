import { useEffect, useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import * as miscService from '../../api/miscApi';
import AnimeCard from '../../components/ui/card/AnimeCard';
import animeCardBg from '../../assets/images/animeBgCard.jpg';
import TypeButton from './animeFormComponent/TypeButton';
import EditRatingForm from './animeFormComponent/EditRatingForm';

function AddAnime() {
  const { openFormModal } = useModal();

  const [newAnime, setNewAnime] = useState({
    id: 0,
    type: 'TV',
    imagePath: animeCardBg,
    title: '',
    Genres: [{ genre: 'Genre' }],
    Episodes: []
  });

  const [ratings, setRatings] = useState([]);

  const fetchRatings = async () => {
    const {
      data: { ratings }
    } = await miscService.getRatings();

    setRatings(ratings);
  };

  useEffect(() => {
    fetchRatings();
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="text-snow-white px-32 pt-10 border">
      <div className="text-2xl ml-4 mb-2">New Anime</div>
      <div className="bg-dark-gray w-full flex">
        <div className="w-1/3 pt-10 pb-10 border">
          <div className="w-fit mx-auto">
            <AnimeCard anime={newAnime} />
          </div>
        </div>
        <div className="grow px-24 pt-8 flex flex-col text-xl">
          <TypeButton type={newAnime.type} selectType={handleChangeType} />
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
              onChange={handleOnChange}
            />
            <span className="block mr-6">Rating:</span>
            <select
              className="rounded-md px-3 mr-2 grow bg-medium-gray border-none text-low-white focus:outline focus:outline-anima-green/80 focus:ring-transparent"
              name="rating"
              value={newAnime.rating}
              onChange={handleOnChange}
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
        </div>
      </div>
    </form>
  );
}

export default AddAnime;
