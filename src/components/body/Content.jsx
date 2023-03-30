import React from "react";

const ContentComp = () => {
  return (
    <div className="mt-[32px] mb-[30px]">
      <div className="bg-[#111C55] rounded-full h-[63px] w-[63px]"></div>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="bg-myBlue-100  text-white  w-[1920px] ">
      <div className="flex px-[360px] pt-[146px] w-full">
        <div className="">
          <h2 className="h2 text-white">Get in touch with us</h2>
          <p className="p w-[353px] mt-[3px]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div>
            <ContentComp />
            <ContentComp />
            <ContentComp />
          </div>
        </div>
        <div className="inputdiv ml-[61px]">
          <div>
            <input type="text" className="w-[365px] h-[60px]" />
            <input type="text" className="w-[365px] h-[60px]" />
          </div>
          <div>
            <input type="text" className="w-[365px] mt-[32px] h-[60px]" />
            <input type="text" className="w-[365px] mt-[32px] h-[60px]" />
          </div>
          <input type="text" className="w-[757px] mt-[32px] h-[154px]" />

          <button className="buttongrad w-[194px] h-[60px] mt-[32px] ml-[30px] ">
            Submit Message
          </button>
        </div>
      </div>
      <div className="flex w-[1920px]  px-[360px] pb-[146px] pt-[70px]">
        <div className="w-[301px] h-[234px] border border-red-800"></div>
        <div className="w-[301px] h-[234px] border border-red-800"></div>
        <div className="w-[301px] h-[234px] border border-red-800"></div>
        <div className="w-[301px] h-[234px] border border-red-800"></div>
      </div>
    </div>
  );
};

export default Content;
