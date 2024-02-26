import React from "react";
import css from "./AutoBoard.module.css";
import car from "../../images/image1.png";

export const AutoBoard = ({
  name,
  model,
  year,
  rentalPrice,
  city,
  country,
  rentalCompany,
  type,
  img,
  id,
  accessories,
  engineSize,
}) => {
  return (
    <>
      <div className={css.AutoBoard}>
        <div className={css.imageBorder}>
          {/* <icon></icon> */}
          <img src={img} className={css.image} alt="car" />
        </div>
        <div className={css.nameInfo}>
          <h6 className={css.title}>
            {name} {model}, {year}
          </h6>
          <p className={css.price}>{rentalPrice}</p>
        </div>
        <div className={css.AutoBoardInfo}>
          <div className={css.info}>{city}</div>
          <div className={css.info}>{country}</div>
          <div className={css.info}>{rentalCompany}</div>
          <div className={css.info}>{name}</div>
          <div className={css.info}>{id}</div>
          <div className={css.info}>{type}</div>
          <div className={css.info}>{engineSize}</div>
        </div>
      </div>
    </>
  );
};
