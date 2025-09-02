function ErrorMessage({ message }) {
  return (
    <div className="bg-red-600 text-white px-4 py-2 rounded-lg mb-4">
      {message}
    </div>
  );
}

export default ErrorMessage;
