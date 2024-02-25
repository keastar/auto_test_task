import React from "react";
// import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { AutoBoard } from "../../components/AutoBoard/AutoBoard.js";
// import { SearchInput } from "../../components/SearchInput/SearchInput.js";
// import { AutoList } from "../../components/AutoList/AutoList.js";
import { getAutos } from "../../fakeAPI.js";
import css from "./Catalog.module.css";

const Catalog = () => {
  const autos = getAutos();
  const [searchParams, setSearchParams] = useSearchParams();
  const autoMake = searchParams.get("make") ?? "";
  const autoRentalPrice = searchParams.get("rentalPrice") ?? "";
  const autoMileage = searchParams.get("mileage") ?? "";

  const visibleAutos = autos.filter((auto) =>
    auto.make.toLowerCase().includes(autoMake.toLowerCase())
  );

  const updateQueryString = (event) => {
    const autoMake = event.target.value;
    if (autoMake === "") {
      return setSearchParams({});
    }
    setSearchParams({ autoMake: autoMake });
  };
  // const updateQueryString = (make) => {
  //   const nextParams = { make } !== "" ? { make } : {};
  //   setSearchParams(nextParams);
  // };

  const updatePriceQueryString = (rentalPrice) => {
    const nextParams = rentalPrice !== "" ? { rentalPrice } : {};
    setSearchParams(nextParams);
  };

  const updateMileageQueryString = (mileage) => {
    const nextParams = mileage !== "" ? { mileage } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      {/* <SearchInput value={autoMake} onChange={updateQueryString} /> */}
      {/* <SearchInput value={autoRentalPrice} onChange={updatePriceQueryString} />
      <SearchInput value={autoMileage} onChange={updateMileageQueryString} /> */}
      {/* <AutoList products={visibleAutos} /> */}

      <div className={css.catalog}>
        <div className={css.catalog_input_wrap}>
          <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Car brand</p>
            <input
              type="text"
              value={autoMake}
              className={css.catalog_input_form1}
              onChange={updateQueryString}
            />
          </div>
          <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Price/ 1 hour</p>
            <input
              type="text"
              value={autoRentalPrice}
              className={css.catalog_input_form2}
              onChange={updatePriceQueryString}
            />
          </div>
          <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Сar mileage / km</p>
            <div className={css.catalog_input_unite}>
              <input
                type="text"
                value={autoMileage}
                className={css.catalog_input_form3}
                onChange={updateMileageQueryString}
              />
              <input
                type="text"
                value={autoMileage}
                className={css.catalog_input_form4}
                onChange={updateQueryString}
              />
            </div>
          </div>
        </div>

        <div className={css.catalog_auto}>
          {visibleAutos.map(
            ({
              make,
              model,
              year,
              rentalPrice,
              city,
              country,
              rentalCompany,
              type,
              id,
              accessories,
              engineSize,
            }) => {
              return (
                <div key={id} className={css.catalog_auto_board}>
                  {/* Здесь будет карточка машинs и кнопка, которая вызывает модалку */}
                  <AutoBoard
                    name={make}
                    model={model}
                    year={year}
                    price={rentalPrice}
                    city={city}
                    country={country}
                    rentalCompany={rentalCompany}
                    type={type}
                    id={id}
                    accessories={accessories[1]}
                    engineSize={engineSize}
                  />
                  <button
                    type="button"
                    className={css.btn}
                    // onClick={handleClose}
                  >
                    Learn more
                  </button>
                  {/* <Link to={`${auto}`}>{make}</Link> */}
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
