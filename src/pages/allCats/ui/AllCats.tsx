import { ICat, useGetCatsQuery } from "@/entities/cat";
import { CatsList } from "@/widgets/CatsList";
import { InfiniteScroll, useInfiniteScroll } from "@/widgets/InfiniteScroll";

export function AllCats() {
  const {
    items: allCats,
    isLoading,
    loadNextPage,
  } = useInfiniteScroll<ICat>({
    queryHook: useGetCatsQuery,
    limit: 10,
  });

  return (
    <InfiniteScroll onScrollEnd={loadNextPage}>
      {isLoading && <p>Загрузка...</p>}
      {allCats && <CatsList cats={allCats} />}
    </InfiniteScroll>
  );
}
