import { useState } from "react";
import { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./CatsList.module.css";
import { CatCard, ICat } from "@/entities/cat";
import { ToggleFavorite } from "@/features/toggleFavorite";

interface CatsListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  cats: ICat[];
}

export const CatsList = (props: CatsListProps) => {
  const { className, cats, ...otherProps } = props;
  const [loadedCats, setLoadedCats] = useState<Record<string, boolean>>({});

  return (
    <div className={cn(styles.catsList, className)} {...otherProps}>
      {cats.map((cat) => (
        <div key={cat.id} className={styles.cardConteiner}>
          <CatCard
            cat={cat}
            className={styles.card}
            onLoadComplete={() =>
              setLoadedCats((prev) => ({ ...prev, [cat.id]: true }))
            }
          />
          {loadedCats[cat.id] && (
            <ToggleFavorite cat={cat} classNames={styles.gtb} />
          )}
        </div>
      ))}
    </div>
  );
};
