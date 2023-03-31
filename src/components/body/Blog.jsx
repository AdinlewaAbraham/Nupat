import React from "react";
import Tag from "./Tag";

const BlogComp = (p) => {
  return (
    <div className="flex w-[943px] justify-center py-[29px] border-t">
      <div className="relative">
        <img src={p.img} alt="" />
        {p.show && (
          <div className="absolute top-[40px] left-[36px] bg-[#1C1F35] bg-opacity-90 w-[373px] h-[223px] text-white justify-center flex items-center">
            Read More
          </div>
        )}
      </div>
      <div className="h-[308px] border-r text-center flex flex-col items-center px-[20px]">
        <svg
          width="53"
          height="58"
          viewBox="0 0 53 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="11"
            y="28"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="11"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="24"
            y="28"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="24"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="36"
            y="28"
            width="6"
            height="6"
            fill="#FFD550"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="36"
            y="41"
            width="6"
            height="6"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M52 20H1V9C1 7.34315 2.34315 6 4 6H49C50.6569 6 52 7.34315 52 9V20Z"
            fill="#FFD550"
          />
          <path
            d="M50 5.66699H3.33333C2.04467 5.66699 1 6.71166 1 8.00033V54.667C1 55.9557 2.04467 57.0003 3.33333 57.0003H50C51.2887 57.0003 52.3333 55.9557 52.3333 54.667V8.00033C52.3333 6.71166 51.2887 5.66699 50 5.66699Z"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M40.667 1V10.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.667 1V10.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 19.667H52.3333"
            stroke="#1C1F35"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p className="font-[600] text-[40px] leading-[47px]">{p.date}</p>
        <p className="text-[16px] font-[500] leading-[24px]">September</p>
      </div>
      <div className="ml-[29px]">
        <h2
          className="font-[400] text-[25px] leading-[29px] w-[348px]"
          style={{ color: `${p.hcolor}` }}
        >
          {p.header}
        </h2>
        <p className="mb-[18px] mt-[16px] font-[500] text-[16px] leading-[24px] w-[335px] text-[#666C89]">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.{" "}
        </p>
        <ul className="list-disc ml-[30px]">
          <li>Urgent transport solutions </li>
          <li>Reliable & experienced staffs </li>
          <li>Urgent transport solutions</li>
          <li> Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="mt-[100px] w-[1960px] flex justify-center">
      <div>
        <div className="flex justify-center items-center">
          <Tag text="Our Blog" />
        </div>
        <h2 className="h2 text-center mt-[5px]">Our Latest News</h2>
        <BlogComp
          img="https://i.ibb.co/fdxGjRb/train.png"
          header="Inland freight a worthy solution for your business"
          date="08"
        />
        <BlogComp
          img="https://i.ibb.co/ch7ZNWS/boxpacking.png"
          header="How technology can help redraw the supply chain map"
          date="12"
          hcolor="#FFBE34"
          show={true}
        />
        <BlogComp
          img="https://i.ibb.co/thBb7xf/Photo.png"
          header="Five things you should have ready for your broker"
          date="25"
          
          hcolor="#1C1F35"
        />
        <div className="w-[943px] border-t"></div>
        <div className="flex justify-center">
          <button className="bg-myBlue-100 w-[194px] h-[60px] text-white mt-[39px]">
            More Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
