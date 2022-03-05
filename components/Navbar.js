import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <ActiveLink text="Home" href="/"></ActiveLink>
      <ActiveLink text="About" href="/about"></ActiveLink>
      <ActiveLink text="Contact" href="/contact"></ActiveLink>
    </nav>
  );
};

export default Navbar;
