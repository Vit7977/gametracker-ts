interface ButtonProps {
  text: string;
}

function SubmitButton({ text }: ButtonProps) {
  return (
    <button
      className="font-medium bg-white border border-sky-800 w-full p-2 pl-0.5 pr-0.5 shadow-xs shadow-black/50 rounded-lg transition-all duration-300 
      hover:scale-105 hover:bg-sky-400/10
      active:scale-90 active:bg-gray-300 active:text-gray-400 active:border-gray-500"
      type="submit"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
