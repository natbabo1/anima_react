import MenuItem from './MenuItem';
function MenuContainer() {
  return (
    <div className="flex justify-between items-center grow">
      <div className="flex gap-5 ">
        <MenuItem menu="Home" to="/" />
        <MenuItem menu="This Season" to="/this-season" />
        <MenuItem menu="Movies" to="/movies" />
        <MenuItem menu="Pricing" to="/pricing" />
      </div>
      <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
        <input
          className="rounded-md border-none px-3 bg-medium-gray  focus:outline focus:outline-anima-green/80 caret-anima-green focus:ring-transparent "
          type="text"
          placeholder="Find your anime"
        />
        <button
          className="w-9 border-2 border-anima-green rounded-md aspect-square text-anima-green font-medium hover:bg-anima-green hover:text-white active:bg-anima-lime"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass text-anima-green"></i>
        </button>
      </form>
    </div>
  );
}

export default MenuContainer;
