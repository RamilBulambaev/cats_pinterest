import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "./types";
import { LS_FAV_KEY } from "@/shared/const/localestorage";

interface FavoriteState {
  favoriteCats: ICat[];
}

const initialState: FavoriteState = {
  favoriteCats: JSON.parse(localStorage.getItem(LS_FAV_KEY) || "[]"),
};

const favoriteCatsSlice = createSlice({
  name: "favoriteCats",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<ICat>) => {
      const index = state.favoriteCats.findIndex(
        (cat) => cat.id === action.payload.id
      );
      if (index !== -1) {
        state.favoriteCats.splice(index, 1);
      } else {
        state.favoriteCats.push(action.payload);
      }
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favoriteCats));
    },
  },
});

export const { toggleFavorite } = favoriteCatsSlice.actions;
export default favoriteCatsSlice.reducer;
