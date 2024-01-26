const getData = async (parrams, querys = "") => {
  const API_URL = "https://api.themoviedb.org/3/";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNWFkNGFhYzk2YzRiOGFlMGM3Mzg3ZDJkYjhhM2JlYiIsInN1YiI6IjY1NzcyNjk1ZWM4YTQzMDBmZDdkYjllMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iPDT4vHJ447bhavgWSUrSj2fQcofmEvrCQomG2yZXq8",
    },
  };
  const idioma = "language=es";
  try {
    if (parrams) {
      const response = await fetch(
        API_URL + parrams + querys + idioma,
        options
      );
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
getData();
export default getData;
