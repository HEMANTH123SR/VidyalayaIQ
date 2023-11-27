import React from "react";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-red-50 flex flex-col md:flex-row p-6">
      <div className="hidden md:w-1/2 md:h-full md:flex md:justify-center md:items-center ">
        <Image
        layout="responsive"
          src="/best-one.png"
          width={500}
          height={500}
          alt="auth picture"
        />
      </div>
      <div className="h-full  md:w-1/2 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
