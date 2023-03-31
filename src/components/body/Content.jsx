import React from "react";
import Tag from "./Tag";

const ContentComp = (p) => {
  return (
    <div className="mt-[32px] mb-[30px] flex">
      <img src={p.img} alt="" className="mr-[14px]"/>
      <div>
        <p className="text-[14px] font-[500] leading-[18px]">{p.type}</p>
        <p>{p.info}</p>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="bg-myBlue-100  text-white  w-[1920px] ">
      <div className="flex px-[360px] pt-[146px] w-full">
        <div className="relative">
          <div className="absolute top-[-40px]">
          <Tag text="Contact" dark={true}/></div>
          <h2 className="h2 text-white">Get in touch with us</h2>
          <p className="p w-[353px] mt-[3px] text-[16px] font-[500] leading-[24px]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div>
            <ContentComp
              img="https://i.ibb.co/ssg2gZ0/Icon.png"
              type="Email"
              info="contact@logistics.com"
            />
            <ContentComp
              img="https://i.ibb.co/fMCpqx0/Icon.png"
              type="Call Us "
              info="(00) 112 365 489"
            />
            <ContentComp
              img="https://i.ibb.co/F8WKjMm/Icon.png"
              type="Mon - Sat 9.00 - 18.00"
              info="Sunday Closed"
            />
          </div>
        </div>
        <div className="inputdiv ml-[61px]">
          <div>
            <input
              type="text"
              className="w-[365px] h-[60px] pl-[30px]"
              placeholder="Your name*"
            />
            <input
              type="text"
              className="w-[365px] h-[60px] pl-[30px]"
              placeholder="Email*"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[365px] mt-[32px] h-[60px] pl-[30px]"
              placeholder="Phone Number*"
            />
            <input
              type="text"
              className="w-[365px] mt-[32px] h-[60px] pl-[30px]"
              placeholder="City*"
            />
          </div>

          <input
            type="text"
            className="w-[757px] mt-[32px] h-[154px] pl-[30px] "
            placeholder="Your Message"
          />

          <button className="buttongrad w-[194px] h-[60px] mt-[32px] ml-[30px] ">
            Submit Message
          </button>
        </div>
      </div>
      <div className="flex w-[1920px]  px-[360px] pb-[146px] pt-[70px]">
        <img
          className="w-full"
          src="https://i.ibb.co/VtJnMKT/Client-Logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
