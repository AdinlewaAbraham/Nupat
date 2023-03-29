import React from "react";
import "../../../src/index.css";

const HeroComp = (p) => {
  return (
    <div>
      <div>{p.icon}</div>
      <div>
        <h2 className="font-[400] text-[25px]">{p.header}</h2>
      </div>
      <div>
        <p>
          Following the quality of our service thus having gained trust of our
          many clients.
        </p>
      </div>
    </div>
  );
};
const TransportImgCard = (p) => {
  return (
    <div
      className="w-[320px] h-[407px] mx-[8px] p-[25px] flex flex-col justify-end"
      style={{ background: `url(${p.imgsrc})` }}
    >
      <h4 className="font-[500] text-[20px] leading-[23px] text-white">
        {p.header}
      </h4>
      <p className="text-myYellow-100 font-[500] text-[16px] leading-[24px]">
        {p.paragraph}
      </p>
    </div>
  );
};

const HeroOne = () => {
  return (
    <div className="text-white">
      <div
        className="bg-[url('https://s3-alpha-sig.figma.com/img/f9d0/8740/770957579a2c5261b096d035626a1166?Expires=1681084800&Signature=S98GA1DFa0X6UxAmM57eMlXwXaqvXxZNZ7GgvxqveN~1yFDcECK14f4n5tw26TIzvfhexS75SzhzEadMH3v519GpqOWYi6acAzCBPJZrA~eR-meZjLBjzFq4FKQqThmr1nP4vc0-ygr19hHqnZhjUo3VPZGRgk~FxuGdlOnK7QM4CkS1V1NprkHe2KXGaLXZGDHje-Thq6LwwnlA97GHf9ZwNmapEYY3S3CSVDKgjYxTOJY27ZKRrG2uarNcaG0XLX2U4yPFFeYxElYC7OUREpn~4b~UjH-AHW4arC6iBX-TanPLCdf1mzGCKuVFSowTw4udH999RjMd4wcSQYcfaw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')]
    h-[995px] w-[1920px] relative px-[360px]
    "
      >
        <div className="absolute top-[278px] w-[554px] ">
          <h1 className="font-[700] text-[60px] leading-[71px] w-[550px]">
            Your Gateway to any Destination in the World
          </h1>
          <p className="font-[500] text-[16px] leading-[24.24px] mt-[6px]">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>
          <button className="w-[194px] h-[60px] bg-yellow-400 relative">
            Explore More{" "}
            <div className="absolute bg-white right-0 w-[64px] h-[105px] border-[50%]"></div>
          </button>
        </div>
      </div>
      <div className="px-[360px] text-black flex flex-row">
        <div>
          <h2 className="font-[600] text-[35px] leading-[41px] w-[294px]">
            Safe & Reliable Cargo Solutions
          </h2>
        </div>
        <div>
          <HeroComp header="Sea Transport Services" />
          <HeroComp header="Air Fright Services" />
        </div>
        <div>
          <HeroComp header="Warehousing Services" />
          <HeroComp header="Local Shipping Services" />
        </div>
      </div>
      <div className="relative w-[1920px]">
        <img
          className="h-[504px] w-[1920px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/1ea3/0812/2e06fc2b2e1943593343f58fd83b63cb?Expires=1681084800&Signature=nBZ6ekw7ZtbMdAH5ZsL9uTJ6GhnqzZNJuLya7Pi-SCQwJjFwE9l5mVIacHzUcrXM7FA~1N~AeUVh5sfLzCZFJcqnAixVAbZi8n3fzs3WE6T-Wcb-3D2~qN8Qw~n5Ry6wYZoyCvaP6uh5ozRjMP~cvsLXfsuuVg4yyUNqqhTgqZ3U81HjkMgPHsOziJ6ehq0hSEnbLhLmcRI0J6DAubyTEAWIODcrqhUKHSVdLAq78HacHyxySfyTO1ZvRMqM~g1bYaqZRHzV0zhyCkfAFHZxxHcK0hpUPYDMh9awdRFjuqJvsmHRrv32PkMsBcg5Dab0XhcYieN5s8NLFOs2j9bVhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="grad h-[504px] w-[1920px]"></div>

        <div className="p-[86px] absolute top-[400px] left-[20%] bg-white w-[1200px] text-black mb-[100px] flex flex-row justify-between">
          <div className="w-[472px]">
            <h2 className="text-[35px] font-[600] leading-[41px]">
              We provide full range global logistics solution
            </h2>
            <p className="text-[16px] font-[500]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. <br />
              <br /> Organically grow the holistic world view of disruptive
              innovation via workplace diversity and empowerment.
            </p>
            <div className="flex items-center">
              <div className="w-[58px] h-[58px] rounded-full yellowgrad "></div>
              <p>Delivery on Time</p>
            </div>
            <div className="flex items-center">
              <div className="w-[58px] h-[58px] rounded-full border-[50%] yellowgrad"></div>
              <p>Optimized Travel Cost</p>
            </div>
          </div>
          <div className="relative">
            <div className="clipdiv bg-no-repeat w-[500px] h-[400px] absolute right-[-40px]"></div>
            <div className="clipdivTwo bg-no-repeat w-[300px] h-[200px] absolute top-[250px] right-[234px]"></div>
          </div>
        </div>
      </div>
      <div className="mt-[500px] text-black flex justify-center w-[1920px]">
        <div className="flex items-center border border-black border-x-0 py-[23px] px-[106px]">
          <span className="text-[50px] font-[600]"> 1294</span>{" "}
          <div className="w-[17px] h-[17px] mx-[16px] smallyellowgrad"></div>{" "}
          Delivered Packages
        </div>
        <div className="flex items-center  border border-black border-r-0 px-[106px]">
          <span className="text-[50px] font-[600]"> 3584</span>{" "}
          <div className="w-[17px] h-[17px] mx-[16px] smallyellowgrad"></div>{" "}
          Satisfied Clients
        </div>
      </div>
      <div className="text-black flex justify-center flex-col  w-[1920px]">
        <h2 className="text-center text-[35px] font-[600] leading-[41px] mt-[90px]">
          Transporting Across The World
        </h2>
        <div className="gradbutton relative  flex justify-center mt-[300px]">
          <div className="flex justify-center mt-[35px] absolute top-[-283px]">
            <TransportImgCard
              imgsrc="https://imageup.me/images/32584582-6ded-4bc0-9a38-23c39d8e3244.png"
              header="Liquid Transportation"
              paragraph="Premium Tankers"
            />
            <TransportImgCard
              imgsrc="https://imageup.me/images/d4b51762-0b0e-4f4a-bb58-883366d2f5cd.png"
              header="Packaging Solutions"
              paragraph="Warehouse Management"
            />
            <TransportImgCard
              imgsrc="https://imageup.me/images/9f0f5ab4-04b2-41c8-acfc-c87bf8a0b873.png"
              header="Contract Logistics"
              paragraph="Road Transportation"
            />
            <TransportImgCard
              imgsrc="https://imageup.me/images/a24b0bff-82bb-43f7-99e5-81f4836f9685.png"
              header="Warehouse & Distribution"
              paragraph="Large Warehouse"
            />
            <TransportImgCard
              imgsrc="https://imageup.me/images/e905a065-1fa2-483a-a9a7-7f2720d496b8.png"
              header="Specialized Transport"
              paragraph="Ocean Transports"
            />
          </div>
          <button className="bg-blue-300 absolute top-[190px] w-[194px] h-[60px] text-white">More Work</button>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
