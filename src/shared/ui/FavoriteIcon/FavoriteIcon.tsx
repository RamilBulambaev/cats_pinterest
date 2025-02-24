import { useState } from "react";
import Favorite from "@/shared/assets/icon/favorite.svg?react";
import NoFavorite from "@/shared/assets/icon/noFavorite.svg?react";
import styles from "./FavoriteIcon.module.css";
import cn from "classnames";

interface FavoriteIconProps extends React.SVGProps<SVGAElement> {
  isFav: boolean;
  classNames?: string;
}

export function FavoriteIcon(props: FavoriteIconProps) {
  const { isFav = false, classNames } = props;
  const [isHovered, setIsHovered] = useState(false);

  const Icon = isHovered || isFav ? Favorite : NoFavorite;

  return (
    <div
      className={cn(styles.icon, classNames)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon width="100%" height="100%" />
    </div>
  );
}
