/* eslint-disable react/prop-types */
const Button = ({ onClickEvent, children, classes, ...props }) => {
  return (
    <div className={classes}>
      <button
        onClick={onClickEvent}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-2 rounded-lg text-black mt-5"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
