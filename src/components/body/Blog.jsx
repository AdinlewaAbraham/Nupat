import React from "react";

const BlogComp = (p) => {
  return (
    <div className="flex w-[943px] justify-center py-[29px] border-t">
      <div>
        <img src={p.img} alt="" />
      </div>
      <div className="h-[308px] border-r text-center">
        <img src="" alt="" />
        <p className="font-[600] text-[40px] leading-[47px]">{p.date}</p>
        <p className="text-[16px] font-[500] leading-[24px]">September</p>
      </div>
      <div className="ml-[29px]">
        <h2 className="font-[400] text-[25px] leading-[29px] w-[348px]">
          {p.header}
        </h2>
        <p className="mb-[18px] mt-[16px] font-[500] text-[16px] leading-[24px] w-[335px] text-[#666C89]">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.{" "}
        </p>
        <ul>
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
    <div className="mt-[200px] w-[1960px] flex justify-center">
      <div>
        <h2 className="h2 text-center">Our Latest News</h2>
        <BlogComp
          img="https://i.ibb.co/fdxGjRb/train.png"
          header="Inland freight a worthy solution for your business"
          date="08"
        />
        <BlogComp
          img="https://i.ibb.co/ch7ZNWS/boxpacking.png"
          header="How technology can help redraw the supply chain map"
          date="12"
        />
        <BlogComp
          img="https://i.ibb.co/thBb7xf/Photo.png"
          header="Five things you should have ready for your broker"
          date="25"
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
