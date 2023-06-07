const LoadingSpinner = ({ fullScreen }) => {
  // Loading animation
  return (
    <>
      {fullScreen === true ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-192px)]">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
