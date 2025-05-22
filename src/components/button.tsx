import { FaCartPlus } from "react-icons/fa";

type ButtonData = {
  label: string;
  onClick: () => void;
};
function ColorButton({ label, onClick }: ButtonData) {
  return (
    <button
      onClick={onClick}
      className={`
          flex items-center justify-center gap-2
          w-[68px] h-[30px] sm:w-[76px] sm:h-[34px]
          border border-white
          text-white font-medium text-xs
          rounded-lg
          hover:scale-105 transition-transform
        `}
    >
      <FaCartPlus className="w-[12px] h-[12px]" />
      {label}
    </button>
  );
}
export default ColorButton;
