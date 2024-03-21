import React, {
  lazy,
  useReducer,
  // createContext,
  // useContext,
  // useState
} from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout.js";
import catalogAutos from "../../../src/Cars.json";

const About = lazy(() => import("../../pages/About/About"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const AutoDetails = lazy(() => import("../../pages/AutoDetails/AutoDetails"));
const LikedCarrs = lazy(() => import("../../pages/LikedCarrs/LikedCarrs.js"));

export const MyContext = React.createContext(null);

function reducer(state, item) {
  return [...state, item];
}

export const App = () => {
  // const { likedCarrs } = React.useState([]);
  // const [likedCarrs, setlikedCarrs] = React.useState(null);

  const [likedCarrs, setlikedCarrs] = useReducer(reducer, []);

  // const context = {
  //   likedCarrs: likedCarrs,
  //   totalLikedCarrs: likedCarrs.length,
  // };

  return (
    <MyContext.Provider
      // value={{ likedCarrs }}
      value={{ likedCarrs, setlikedCarrs }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* BrowserROuter из index.js распарсивает url и когда обнаруживает часть адресной строки
            (url) такую же, как в Route -> рендерится страничка-компонент */}
          <Route index element={<About />} />
          <Route path="catalog" element={<Catalog autos={catalogAutos} />} />
          <Route path="catalog/:autoId" element={<AutoDetails />} />
          <Route path="favorites" element={<LikedCarrs />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
};
