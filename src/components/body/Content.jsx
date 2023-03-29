import React from "react";

const Content = () => {
  return (
    <div className="bg-myBlue-100  text-white  w-[1920px]">
      <div className="flex px-[360px] py-[146px]">
        <div className="">
          <h2 className="h2 text-white">Get in touch with us</h2>
          <p className="p w-[353px] mt-[3px]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
        </div>
        <div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" />
          <button className="buttongrad w-[194px] h-[60px]">Submit Message</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
