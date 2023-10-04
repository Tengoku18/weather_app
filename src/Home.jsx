import React from "react";
import Form from "./components/Form";
import Detail from "./components/Detail";

const Home = () => {
  return (
    <div className=" relative h-screen w-screen bg-center bg-no-repeat">
      <div className="absolute inset-y-0 -z-10  h-full w-full bg-black opacity-10" />

      <img
        src="/sky.jpg"
        className="-z-20 absolute top-0 h-full w-full"
        alt="Sky"
      />
      <div className="flex  justify-center items-end h-1/5 text-white font-Sofia tracking-widest">
        <div className="flex flex-col">
          <h1 className="  font-normal text-6xl"> Weather Today</h1>
          <h3 className="  text-lg w-full text-center">
            {" "}
            Get weather information in seconds{" "}
          </h3>
        </div>
      </div>

      <div className="my-20 flex w-full  justify-center">
        <Form />
      </div>
      <div className="max-w-7xl bg-[#99B8BD] mx-auto h-1/2 rounded-md  ">
        <Detail />
      </div>
    </div>
  );
};

export default Home;
