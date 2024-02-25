import { SlArrowDown } from "react-icons/sl";
import css from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }) => {
  return (
    <div className={css.Wrapper}>
      <SlArrowDown className={css.sl} />
      <input
        type="text"
        value={value}
        className={css.Input}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
