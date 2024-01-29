import { useEffect, useState } from "react";
import getData from "../../data/data";

function Video({ id }) {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    if (id) {
      getData(`movie/${id}/videos?`)
        .then(({ results }) => setVideo(results[0]))
        .catch((e) => console.log(e));
    }
  }, [id]);
  console.log(video);
  return (
    <div className="w-full mt-8">
      {video ? (
        <iframe
          className="w-3/4 h-[450px] mx-auto"
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      ) : (
        <div className="w-3/4 h-[450px] mx-auto flex items-center justify-center bg-black rounded-md ">
          <h2 className="text-white text-3xl">Not Video</h2>
        </div>
      )}
    </div>
  );
}

export default Video;
