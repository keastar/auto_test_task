import {
  Link,
  // useLocation
} from "react-router-dom";
import css from "./AutoList.module.css";

export const AutoList = ({ autos }) => {
  //   const location = useLocation();

    return (
      <>
        <div className={css.Container}>
          {autos.map(({ auto }) => {
            return (
              <div key={auto.id} className={css.Wrapper}>
                <Link
                  to={`${auto.id}`}
                  //   state={{ from: location }}
                >
                  <img src="https://via.placeholder.com/200x100" alt="" />
                  <h3 className={css.AutoName}>{auto.make}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
};
