function TypeButton({ type, selectType }) {
  return (
    <div>
      <span className="mr-4">Type: </span>
      <div className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className={`text-sm font-medium button${
            type === 'TV' ? '-outline' : ''
          }`}
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
          onClick={() => selectType('TV')}
        >
          TV
        </button>
        <button
          type="button"
          className={`text-sm font-medium button${
            type === 'Movie' ? '-outline' : ''
          }`}
          style={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
          onClick={() => selectType('Movie')}
        >
          Movie
        </button>
      </div>
    </div>
  );
}

export default TypeButton;
