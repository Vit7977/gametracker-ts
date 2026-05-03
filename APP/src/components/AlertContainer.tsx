interface AlertProps {
  error: boolean;
  message: string;
  visible: boolean;
}

function AlertContainer({ error, message, visible }: AlertProps) {
  return (
    <div
      className={`absolute top-20 right-2 flex items-center justify-between border w-96 p-3 rounded-lg font-medium shadow-lg 
        ${error ? "bg-red-400 border-red-900 text-red-900" : "bg-green-400 border-green-900 text-green-900"} 
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <p>{message}</p>
    </div>
  );
}

export default AlertContainer;
