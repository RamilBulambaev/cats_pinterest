import React, { HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <div {...otherProps} className={cn(styles.card, className)}>
      {children}
    </div>
  );
};
