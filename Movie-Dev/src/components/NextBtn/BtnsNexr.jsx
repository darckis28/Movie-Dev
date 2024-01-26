import { GrPrevious, GrNext } from "react-icons/gr";
function BtnsNexr({ page, setPage, direccion }) {
  function handelNext() {
    if (page <= 100) {
      setPage(page + 1);
      window.location.href = `#${direccion}`;
    }
  }
  function handelBack() {
    if (page > 1) {
      setPage(page - 1);
      window.location.href = `#${direccion}`;
    }
  }
  return (
    <div className="flex gap-2 dr:gap-5 w-full justify-center mb-16 ">
      {page > 1 && (
        <button
          onClick={handelBack}
          className="text-white rounded-full bg-gray-800 p-4   hover:bg-yellow-500 text-sm dr:text-base"
        >
          <GrPrevious />
        </button>
      )}
      <div className="text-white  px-3 py-2 bg-gray-700 rounded-full flex items-center text-sm dr:text-base">
        <p className=" font-bold">
          <span className=" rounded-full bg-gray-800 py-2 px-4 ">{page}</span>{" "}
          de 100
        </p>
      </div>
      {page <= 100 && (
        <button
          onClick={handelNext}
          className="text-white rounded-full bg-gray-800 p-4 hover:bg-yellow-500 text-sm dr:text-base"
        >
          <GrNext />
        </button>
      )}
    </div>
  );
}

export default BtnsNexr;
