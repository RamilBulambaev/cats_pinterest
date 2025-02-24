import { useAppSelector } from "@/app/appStore";
import { CatsList } from "@/widgets/CatsList";

export function FavoriteCats() {
  const favoriteCats = useAppSelector((state) => state.favorites.favoriteCats);

  return (
    <main>
      <CatsList cats={favoriteCats} />
    </main>
  );
}
