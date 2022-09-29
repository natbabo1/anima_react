function Spinner() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-3 offcanvas-backdrop show"
      style={{ zIndex: 1056 }}
    >
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
