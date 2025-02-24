import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./AppLink.module.css";
import cn from "classnames";

interface AppLinkProps extends NavLinkProps {
  className?: string;
  children: React.ReactNode;
}

export const AppLink = ({
  children,
  className,
  to,
  ...otherProps
}: AppLinkProps) => {
  return (
    <NavLink
      to={to}
      {...otherProps}
      className={({ isActive }) =>
        cn(styles.appLink, className, { [styles.active]: isActive })
      }
    >
      {children}
    </NavLink>
  );
};
