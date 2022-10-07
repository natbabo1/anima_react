import { useState } from 'react';
import { toast } from 'react-toastify';
import * as miscService from '../../../api/miscApi';
import { useModal } from '../../../contexts/ModalContext';

function EditRatingForm({ ratings, updateRatings }) {
  const { closeModal } = useModal();

  const [currentRating, setCurrentRating] = useState();
  const [newRating, setNewRating] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentRating === '0') {
        await miscService.createRating(newRating);
      } else {
        await miscService.updateRating(currentRating, newRating);
      }

      updateRatings();
      closeModal();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  const handleOnDelete = async () => {
    try {
      await miscService.deleteRating(currentRating);
      updateRatings();
      closeModal();
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form
      className="flex flex-col items-stretch mt-1 text-snow-white gap-4"
      onSubmit={handleOnSubmit}
    >
      <div className="flex items-center">
        <span className="block mr-6">Select:</span>
        <select
          className="rounded-md px-3 grow bg-medium-gray border-none text-low-white focus:outline focus:outline-anima-green/80 focus:ring-transparent"
          name="rating"
          value={currentRating}
          onChange={(e) => setCurrentRating(e.target.value)}
        >
          {ratings.map((item) => (
            <option key={item.id} value={item.id}>
              {item.rating}
            </option>
          ))}
          <option value="0">New Rating</option>
        </select>
        {currentRating !== '0' && (
          <button
            type="button"
            className="w-10 h-10 border rounded-md ml-3 border-zinc-500 text-zinc-500 hover:border-red-700 hover:text-red-700 focus:bg-red-700 focus:text-zinc-300"
            onClick={handleOnDelete}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        )}
      </div>
      <div className="flex items-center">
        <span className="block mr-6">Set to: </span>
        <input
          type="text"
          placeholder="Rating..."
          className="input-form text-lg grow appearance-none"
          style={{ paddingTop: 9, width: '7rem' }}
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
        />
      </div>
      <button type="submit" className="button-outline mt-3">
        {currentRating === '0' ? 'Save New Rating' : 'Save Change'}
      </button>
    </form>
  );
}

export default EditRatingForm;
