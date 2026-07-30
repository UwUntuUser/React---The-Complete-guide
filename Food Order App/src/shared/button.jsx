export default function Button({ children, className, textOnly, ...props }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
