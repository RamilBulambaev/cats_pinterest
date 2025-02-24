import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import cls from "./InfiniteScroll.module.css";
import cn from "classnames";

interface InfiniteScrollProps {
  children: ReactNode;
  onScrollEnd: () => void;
}

export const InfiniteScroll = ({
  children,
  onScrollEnd,
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (inView) {
      onScrollEnd();
    }
  }, [inView, onScrollEnd]);

  return (
    <main className={cn(cls.infiniteScroll)}>
      {children}
      <div ref={ref} className={cls.trigger}>
        <span className={cls.trigerText}>... загружаем еще котиков ...</span>
      </div>
    </main>
  );
};
