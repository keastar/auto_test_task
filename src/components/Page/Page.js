import css from "./Page.module.css";

export const Page = ({ children }) => {
  return <div className={css.Page}>{children}</div>;
};
