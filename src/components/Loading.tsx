const Loading = ({ isLoading, children }: any) => {
  return (
    <>
      {isLoading && (
        <div className="bg-white loading shadow-2xl rounded-md z-[999]">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f3a3831234507.564a1d2338123.gif"
            alt=""
          />
          <p className="text-2xl ml-2  text-center mb-2 font-bold">
            Loading...
          </p>
        </div>
      )}
      <div className={isLoading ? "opacity-40" : ""}>{children}</div>
    </>
  );
};

export default Loading;
