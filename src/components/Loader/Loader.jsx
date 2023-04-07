import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderWraper}>
      <div className={css.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
