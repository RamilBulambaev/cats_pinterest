import { useState } from "react";
import cn from "classnames";

import { Card } from "@/shared/ui/Card/Card";

import { ICat } from "../../model/types";
import styles from "./CatCard.module.css";

interface CatProps {
  cat: ICat;
  className?: string;
  onLoadComplete?: () => void;
}

export function CatCard({ cat, className, onLoadComplete }: CatProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className={styles.card}>
      {isLoading && <div className={styles.skeleton} />}
      <img
        className={cn(styles.catImage, className, {
          [styles.hidden]: isLoading,
        })}
        src={cat.url}
        onLoad={() => {
          setIsLoading(false);
          onLoadComplete?.();
        }}
      />
    </Card>
  );
}
