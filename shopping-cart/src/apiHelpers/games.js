export const fetchGames = async () => {
  const response = await fetch(
    "https://api.rawg.io/api/games?key=ee5bf1341db9436c98116082abfd714f",
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  return data.results;
};

export const fetchGenres = async () => {
  const response = await fetch(
    "https://api.rawg.io/api/genres?key=ee5bf1341db9436c98116082abfd714f",
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  return data.results;
};
