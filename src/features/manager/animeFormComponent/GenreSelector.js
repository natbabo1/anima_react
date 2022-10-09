import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as miscService from '../../../api/miscApi';
import { useModal } from '../../../contexts/ModalContext';
import EditGenreForm from './EditGenreForm';

function GenreSelector({ Genres, selectGenre }) {
  const { openFormModal } = useModal();
  const [genres, setGenres] = useState(null);

  const fetchGenres = async () => {
    try {
      const {
        data: { genres }
      } = await miscService.getGenres();
      setGenres(genres);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const isChecked = (id) => {
    const idx = Genres.findIndex((item) => item.id === id);
    return idx !== -1;
  };

  const handleOnChange = (e) => {
    const { value: id, name: genre } = e.target;
    const newGenres = [...Genres];
    const isExist = newGenres.findIndex((item) => +item.id === +id);
    if (e.target.checked) {
      if (isExist === -1) {
        newGenres.push({ id: +id, genre });
        selectGenre(newGenres);
      }
      return;
    }
    if (isExist !== -1) {
      newGenres.splice(isExist, 1);
      return selectGenre(newGenres);
    }
  };

  return (
    <div className="flex mt-4">
      <span className="block mr-5">Genres: </span>
      <div className="grid grid-cols-4">
        {genres &&
          genres.map((item, idx) => (
            <label key={item.id} className="block mb-0 mr-8">
              <input
                type="checkbox"
                className="mb-0 mr-3 checked:bg-anima-green focus:ring-0"
                value={item.id}
                name={item.genre}
                defaultChecked={isChecked(item.id)}
                onChange={handleOnChange}
              />
              {item.genre}
            </label>
          ))}
        <button
          type="button"
          className="block bg-anima-green rounded-lg text-sm h-fit mt-2 w-16"
          onClick={() =>
            openFormModal({
              header: 'Genres',
              body: <EditGenreForm genres={genres} updateGenres={fetchGenres} />
            })
          }
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default GenreSelector;
