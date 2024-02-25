import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "../Modal/Dashboard.js";
import { Layout } from "../../components/Layout/Layout.js";
import catalogAutos from "../../../src/Cars.json";

const About = lazy(() => import("../../pages/About/About"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const AutoDetails = lazy(() => import("../../pages/AutoDetails/AutoDetails"));
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* BrowserROuter из index.js распарсивает url и когда обнаруживает часть адресной строки
            (url) такую же, как в Route -> рендерится страничка-компонент */}
        <Route index element={<About />} />
        <Route path="catalog" element={<Catalog autos={catalogAutos} />} />
        <Route path="catalog/:autoId" element={<AutoDetails />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};
