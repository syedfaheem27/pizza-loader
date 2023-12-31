import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick, className }) => {
  const base = `rounded-full text-sm bg-yellow-400 font-semibold uppercase
              tracking-wide text-stone-800 transition-colors duration-300
               hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none
                focus:ring focus:ring-yellow-300 focus:ring-offset-2 
                disabled:cursor-not-allowed `;

  const styles = {
    primary: base + 'md:px-6 md:py-4 px-4 py-3',
    small: base + 'md:px-5 md:py-2.5 px-3 py-2 text-xs',
    round: base + 'md:px-3 md:py-2 px-2 py-1 text-xs',
    secondary: `rounded-full text-sm border-2 border-stone-300 font-semibold uppercase
              tracking-wide text-stone-400 transition-colors duration-300
               hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none
                focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:text-stone-800 
                disabled:cursor-not-allowed md:px-6 md:py-3.5 px-4 py-2.5 ${className}`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
