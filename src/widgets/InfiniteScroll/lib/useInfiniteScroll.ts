import { useState, useEffect, useCallback } from "react";

interface UseInfiniteScrollProps<T extends { id: unknown }> {
  queryHook: (args: { page: number; limit: number }) => {
    data?: T[];
    isLoading: boolean;
  };
  limit?: number;
}

export function useInfiniteScroll<T extends { id: unknown }>({
  queryHook,
  limit = 10,
}: UseInfiniteScrollProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data: newItems, isLoading } = queryHook({ page: pageNumber, limit });

  useEffect(() => {
    if (!newItems) return;

    setItems((prevItems) => {
      const prevIds = new Set(prevItems.map((item) => item.id));
      const uniqueItems = newItems.filter((item) => !prevIds.has(item.id));

      return [...prevItems, ...uniqueItems];
    });

    setHasMore(newItems.length === limit);
  }, [newItems, limit]);

  const loadNextPage = useCallback(() => {
    if (hasMore && !isLoading) {
      setPageNumber((prev) => prev + 1);
    }
  }, [hasMore, isLoading]);

  return { items, isLoading, loadNextPage };
}
