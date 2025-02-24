import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { getNavigationList } from "../../lib/getNavigationList";
import styles from "./Navigation.module.css"

export function Navigation() {
  const navigationItemsList = getNavigationList();

  return (
    <ul className={styles.navigation}>
      {navigationItemsList.map((item) => (
        <AppLink to={item.path} key={item.path}>
          {item.text}
        </AppLink>
      ))}
    </ul>
  );
}
