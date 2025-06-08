export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md p-4 rounded-lg ${className}`}>
      {children}
    </div>
  );
};
