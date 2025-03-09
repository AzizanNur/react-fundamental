export default function SearchForm() {
  return (
    <>
      <form>
        <input type="text" />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(e.target);
          }}
        >
          Search
        </button>
      </form>
    </>
  );
}
