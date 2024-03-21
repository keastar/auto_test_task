import React, { useState, useReducer, useContext } from "react";
import { MyContext } from "../App/App.js";
import css from "./AutoBoard.module.css";
import Modal from "../../components/Modall/Modal.js";
import { StarFilled } from "@ant-design/icons";

const reducer = (key) => key + 1;

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
  accessories,
  engineSize,
  fuelConsumption,
  addToFavorites,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { setlikedCarrs } = useContext(MyContext);

  const [id, updateId] = useReducer(reducer, 0);

  function addToFavorites() {
    setlikedCarrs({
      name,
      model,
      year,
      city,
      country,
      rentalCompany,
      type,
      img,
      id,
      fuelConsumption,
      engineSize,
      id: `${name}-${id}`,
    });
    updateId();
  }

  // const addToFavorites = (auto) => {
  //   setlikedCarrs([...likedCarrs, auto]);
  //   console.log([likedCarrs]);
  // };

  return (
    <>
      <div className={css.AutoBoard}>
        <div className={css.imageBorder}>
          <button className={css.btn_favorite} onClick={addToFavorites}>
            <StarFilled className={css.btn_icon} />
          </button>
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
        <button
          type="button"
          className={css.btn}
          onClick={() => setModalIsOpen(true)}
        >
          Learn more
        </button>
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          name={name}
          model={model}
          year={year}
          price={rentalPrice}
          city={city}
          country={country}
          rentalCompany={rentalCompany}
          type={type}
          image={img}
          id={id}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
        />
      </div>
    </>
  );
};
