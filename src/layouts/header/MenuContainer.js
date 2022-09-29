import MenuItem from './MenuItem';
function MenuContainer() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav me-auto mb-0 mb-lg-0">
        <MenuItem menu="Home" to="/" />
        <MenuItem menu="This Season" to="/this-season" />
        <MenuItem menu="Movies" to="/movies" />
        <MenuItem menu="Pricing" to="/pricing" />
      </div>
      <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Find your anime"
        />
        <button className="btn btn-outline-success " type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default MenuContainer;
