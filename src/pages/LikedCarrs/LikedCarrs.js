import React, { useContext } from "react";
import { AutoBoard } from "../../components/AutoBoard/AutoBoard.js";
import { MyContext } from "../../components/App/App.js";
import css from "./LikedCarrs.module.css";

const LikedCarrs = () => {
  const { likedCarrs } = useContext(MyContext);

  return (
    <>
      <div className={css.favorites}>
        <h2>Автомобилей, из них понравилось {likedCarrs.length} </h2>
        <div className={css.liked_cars}>
          <div className={css.liked_cars_each}>
            {likedCarrs.map(
              ({
                name,
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
                  <div key={id} className={css.liked_cars_board}>
                    {/* Здесь будет карточка машинs и кнопка, которая вызывает модалку */}
                    <AutoBoard
                      name={name}
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
                      engineSize={engineSize}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LikedCarrs;
