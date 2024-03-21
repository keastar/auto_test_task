import React, { Suspense } from "react";
import css from "./Layout.module.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { Container } from "../Container/Container.js";
import { Page } from "../Page/Page.js";
// import { Footer } from "../Footer/Footer.js";

export const Layout = () => {
  return (
    <Page>
      <header className={css.AppHeader}>
        <nav className={css.nav}>
          {/* отвечает за часть привью в адресной строке (url) */}
          <NavLink to="/">About</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer /> */}
    </Page>
  );
};
