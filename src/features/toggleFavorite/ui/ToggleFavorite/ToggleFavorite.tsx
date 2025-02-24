import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { FavoriteIcon } from "@/shared/ui/FavoriteIcon/FavoriteIcon";
import cn from "classnames";
import styles from "./ToggleFavorite.module.css";
import { ICat, toggleFavorite } from "@/entities/cat";

export interface ToggleFavoriteProps {
  cat: ICat;
  classNames?: string;
}

export function ToggleFavorite(props: ToggleFavoriteProps) {
  const { cat, classNames } = props;
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.favorites.favoriteCats);
  const isFavorite = cats.some((currentCat) => cat.id === currentCat.id);

  return (
    <button
      onClick={() => dispatch(toggleFavorite(cat))}
      className={cn(styles.button, classNames)}
    >
      <FavoriteIcon isFav={isFavorite} />
    </button>
  );
}
