import useStorage from "./useStorage";

const useFavorites = () => {
  const [favorites, setFavorites] = useStorage("favorites", []);
  const toggleFavorite = (favorite) => {
    const isFavorite = favorites.includes(favorite);

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter(
        (existingFavorite) => existingFavorite !== favorite
      );
    } else {
      newFavorites = [...favorites, favorite];
    }
    setFavorites(newFavorites);
  };
  return { favorites, setFavorites, toggleFavorite };
};
export default useFavorites;
