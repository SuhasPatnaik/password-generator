const ToastMessage = ({ message }) => {
  return (
    message && (
      <div className="bottom mt-4 bg-green-500 text-white p-3 rounded shadow-lg transition-opacity opacity-60">
        {message}
      </div>
    )
  );
};

export default ToastMessage;
