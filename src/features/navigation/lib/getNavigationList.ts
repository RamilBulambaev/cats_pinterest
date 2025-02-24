import { AppRouter } from "@/shared/const/router";
import { INavigationItem } from "../model/navigation";

export function getNavigationList() {
  const navigationItem: INavigationItem[] = [
    { path: AppRouter.ALL_CATS, text: "Все котики" },
    { path: AppRouter.FAVORITE_CATS, text: "Любимые котики" },
  ];

  return navigationItem;
}
