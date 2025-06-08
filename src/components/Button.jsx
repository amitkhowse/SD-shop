const Button = ({ text, onClick, type = "primary", icon: Icon }) => {
    const baseClasses = "px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2";
    const types = {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button onClick={onClick} className={`${baseClasses} ${types[type] || types.primary}`}>
        {Icon && <Icon className="w-5 h-5" />} {text}
      </button>
    );
  };
  
  export default Button;
  