import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen bg-gray-900">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
