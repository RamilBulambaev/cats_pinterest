export type { ICat } from "./model/types";
export { catApi } from "./api/catsApi";
export { CatCard } from "./ui/CatCard/CatCard";
import { useGetCatsQuery } from "./api/catsApi";
import FavoriteCatsReducer, { toggleFavorite } from "./model/favoriteCatsSlice";

export { FavoriteCatsReducer, toggleFavorite, useGetCatsQuery };
