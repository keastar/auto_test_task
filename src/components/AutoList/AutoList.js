import React from "react";
import { AutoBoard } from "../AutoBoard/AutoBoard.js";
import { useSearchParams } from "react-router-dom";
// import { MyContext } from "../App/App.js";
import css from "./AutoList.module.css";

export const AutoList = ({ autos, allAutos }) => {
  const [searchParams] = useSearchParams();
  const autoMake = searchParams.get("autoMake") ?? "";

  const visibleAutos = autos.filter((auto) =>
    auto.make.toLowerCase().includes(autoMake.toLowerCase())
  );

  // const addToFavorites = (auto) => {
  //   setlikedCarrs([...likedCarrs, auto]);
  //   console.log(likedCarrs);
  // };

  return (
    <>
      <div className={css.catalog_auto}>
        <div className={css.catalog_auto_each}>
          {visibleAutos.map(
            ({
              make,
              model,
              description,
              year,
              rentalPrice,
              city,
              country,
              rentalCompany,
              type,
              img,
              id,
              accessories,
              fuelConsumption,
              engineSize,
            }) => {
              return (
                <div key={id} className={css.catalog_auto_board}>
                  {/* Здесь будет карточка машинs и кнопка, которая вызывает модалку */}
                  <AutoBoard
                    name={make}
                    model={model}
                    description={description}
                    year={year}
                    price={rentalPrice}
                    city={city}
                    country={country}
                    rentalCompany={rentalCompany}
                    type={type}
                    img={img}
                    id={id}
                    accessories={accessories[1]}
                    engineSize={engineSize}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
