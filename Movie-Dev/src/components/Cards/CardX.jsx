function CardX() {
  return (
    <div className="flex gap-4">
      <img
        className="w-20 rounded-lg"
        src="https://images-cdn.ubuy.co.in/63527edf3492081cbd062a28-hislooks-naruto-poster-anime-wall-art.jpg"
        alt=""
      />
      <div className=" pt-2">
        <h4 className=" font-light">Naruto</h4>
        <div className=" font-extralight text-sm flex gap-3 items-center">
          <span className="text-yellow-500 text-base">
            5/<sub>10</sub>{" "}
          </span>
          <span>1h 58min</span>
          <span>2023</span>
        </div>
      </div>
    </div>
  );
}

export default CardX;
