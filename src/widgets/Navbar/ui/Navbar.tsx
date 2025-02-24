import { Navigation } from "@/features/navigation";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
