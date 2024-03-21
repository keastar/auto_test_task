import React from "react";
// import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getAutos } from "../../examplAPI.js";
import { AutoList } from "../../components/AutoList/AutoList.js";
import css from "./Catalog.module.css";

const Catalog = () => {
  const autos = getAutos();
  const [searchParams, setSearchParams] = useSearchParams();
  const autoMake = searchParams.get("autoMake") ?? "";
  // const autoRentalPrice = searchParams.get("autoRentalPrice") ?? "";
  // const autoMileage = searchParams.get("automileage") ?? "";

  const updateQueryString = (event) => {
    const autoMake = event.target.value;
    if (autoMake === "") {
      return setSearchParams({});
    }
    setSearchParams({ autoMake: autoMake });
  };

  const onToggleLiked = autos.filter((auto) => auto.like).length;
  const allAutos = autos.length;

  // const onToggleLiked = () => {};

  // const updatePriceQueryString = (event) => {
  //   const autoRentalPrice = event.target.value;
  //   if (autoRentalPrice === "") {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ autoRentalPrice: autoRentalPrice });
  // };
  // const updateQueryString = (make) => {
  //   const nextParams = { make } !== "" ? { make } : {};
  //   setSearchParams(nextParams);
  // };

  // const updatePriceQueryString = (rentalPrice) => {
  //   const nextParams = rentalPrice !== "" ? { rentalPrice } : {};
  //   setSearchParams(nextParams);
  // };

  // const updateMileageQueryString = (mileage) => {
  //   const nextParams = mileage !== "" ? { mileage } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <>
      <div className={css.catalog}>
        <div className={css.catalog_input_wrap}>
          <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Car brand</p>
            <input
              type="text"
              value={autoMake}
              list={autos}
              name={autos}
              className={css.catalog_input_form1}
              onChange={updateQueryString}
            />
            <datalist id={autos} className={css.autoDataList}>
              <option value="Buick"></option>
              <option value="Volvo"></option>
              <option value="HUMMER"></option>
              <option value="Subaru"></option>
              <option value="Mitsubishi"></option>
              <option value="Nissan"></option>
              <option value="Lincoln"></option>
              <option value="Hyundai"></option>
              <option value="MINI"></option>
              <option value="Bentley"></option>
              <option value="Mercedes-Benz"></option>
              <option value="Aston Martin"></option>
              <option value="Pontiac"></option>
              <option value="Lamborghini"></option>
              <option value="Audi"></option>
              <option value="BMW"></option>
              <option value="Chevrolet"></option>
              <option value="Mercedes-Benz"></option>
              <option value="Chrysler"></option>
              <option value="Kia"></option>
              <option value="LandROVER"></option>
            </datalist>
          </div>
        </div>

        {/* <form action="/action_page.php"> */}
        {/* <input list="browsers" name="browser" />
            <datalist id="browsers">
              <option value="Edge" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist> */}
        {/* <input type="submit" /> */}
        {/* </form> */}
        {/* </div> */}
        {/* <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Price/ 1 hour</p>
            <input
              type="text"
              value={autoRentalPrice}
              className={css.catalog_input_form2}
              // onChange={updatePriceQueryString}
            />
          </div>
          <div className={css.catalog_input}>
            <p className={css.catalog_input_title}>Сar mileage / km</p>
            <div className={css.catalog_input_unite}>
              <input
                type="text"
                value={autoMileage}
                className={css.catalog_input_form3}
                // onChange={updateMileageQueryString}
              />
              <input
                type="text"
                value={autoMileage}
                className={css.catalog_input_form4}
                onChange={updateQueryString}
              />
            </div>
          </div> */}
        {/* </div> */}

        <AutoList
          autos={autos}
          onToggleLiked={onToggleLiked}
          allAutos={allAutos}
        />
      </div>
    </>
  );
};

export default Catalog;
