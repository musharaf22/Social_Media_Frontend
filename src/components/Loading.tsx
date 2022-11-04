import React from "react";

const Loading = () => {
  return (
    <div className="bg-white loading shadow-2xl rounded-md">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f3a3831234507.564a1d2338123.gif"
        alt=""
      />
      <p className="text-2xl ml-2  text-center mb-2 font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
