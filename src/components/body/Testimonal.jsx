import React from "react";

const TestimonalCard = (p) => {
  return (
    <div
      className="p-[72px] w-[600px] h-[425px]"
      style={{ backgroundColor: `${p.bgColor}`, color: `${p.color}` }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={`${p.imgSRC}`} alt="" className="rounded-full" />
          <div className=" ">
            <h3>{p.header}</h3>
            <p>{p.paragraph}</p>
          </div>
        </div>
        <div className="rounded-full commentgrad flex justify-center items-center">
          <svg
            width="33"
            height="22"
            viewBox="0 0 33 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2687 0.824525C13.7697 0.824525 14.1992 1.00347 14.5571 1.36135C14.8434 1.71924 14.9865 2.14871 14.9865 2.64975C14.9865 3.22237 14.8792 3.79499 14.6644 4.3676L8.97404 19.0767C8.61615 19.7925 8.25827 20.3651 7.90038 20.7946C7.47092 21.2956 6.79093 21.5462 5.86043 21.5462L2.31735 21.5462C1.74473 21.5462 1.31527 21.3314 1.02896 20.902C0.671071 20.4725 0.563705 19.8999 0.70686 19.1841L3.06891 3.93814C3.14049 3.07921 3.4268 2.32765 3.92784 1.68345C4.42888 1.11083 5.18044 0.824524 6.18253 0.824524L13.2687 0.824525ZM30.4472 0.824526C30.9483 0.824526 31.3777 1.00347 31.7356 1.36136C32.0219 1.71924 32.1651 2.14871 32.1651 2.64975C32.1651 3.22237 32.0577 3.79499 31.843 4.3676L26.1526 19.0767C25.7947 19.7925 25.401 20.3651 24.9716 20.7946C24.5421 21.2956 23.8979 21.5462 23.039 21.5462H19.4959C18.9233 21.5462 18.4938 21.3314 18.2075 20.902C17.8496 20.4725 17.7423 19.8999 17.8854 19.1841L20.2475 3.93814C20.319 3.07921 20.6054 2.32765 21.1064 1.68345C21.6074 1.11084 22.3232 0.824525 23.2537 0.824525L30.4472 0.824526Z"
              fill="#091242"
            />
          </svg>
        </div>
      </div>
      <p className="mt-[20px]">
        Leverage agile frameworks to provide a robust synopsis for strategy
        foster collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <div className="flex mt-[32px]">
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z"
            fill="#FDAF3B"
          />
        </svg>
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z"
            fill="#FDAF3B"
          />
        </svg>
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z"
            fill="#FDAF3B"
          />
        </svg>
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z"
            fill="#FDAF3B"
          />
        </svg>
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z"
            fill="#FDAF3B"
          />
        </svg>
      </div>
    </div>
  );
};

const TransportersCard = (p) => {
  return (
    <div className="w-[364px] text-white">
      <img src={p.img} alt="" />
      <div className="bg-myBlue-100 h-[112px] px-[34px] pt-[42px]">
        <h3>{p.name}</h3>
        <p>Designer</p>
      </div>
    </div>
  );
};

const CircleText = (p) => {
  return (
    <div className="flex items-center my-[20px]">
      <div className="smallyellowgrad h-[63px] w-[63px] rounded-full"></div>
      <p className="font-[400] text-[20px] leading-23 ml-[12px]">{p.text}</p>
    </div>
  );
};
const Testimonal = () => {
  return (
    <div className="w-[1920px] ">
      <div className="mt-[101px]">
        <div className="flex justify-between px-[360px]">
          <h2 className="text-[35px] font-[600] leading-[41px] ">
            What Our Customer Say
          </h2>
          <div>
            <img src="https://i.ibb.co/KygwCxb/Aerrow.png" alt="" />
          </div>
        </div>
        <div className="flex w-[1920px] justify-center px-[360px] mt-[40px]">
          <TestimonalCard
            header="Kathleen Smith"
            paragraph="Fuel Company"
            bgColor="#F4F4F4"
            color="black"
            imgSRC="https://imageup.me/images/8531ab74-e72e-4da0-bd3b-33adefdcddaf.png"
          />
          <TestimonalCard
            header="John Martin"
            paragraph="Restoration Company"
            bgColor="#091242"
            color="white"
            imgSRC="https://imageup.me/images/8d9a4621-2900-472e-83e9-a6479601cdb0.png"
          />
        </div>
      </div>
      <div className="relative mt-[101px] flex items-center">
        <div className="bg-myBlue-100 w-[960px] h-[897px] relative">
          <div
            className="bg-[url('https://imageup.me/images/044a5232-ffb6-4d26-a62f-e1575077b416.png')] 
        w-[929px] h-[610px] absolute top-[142px] left-[140px]
        "
          >
            <div></div>
          </div>
        </div>

        <div className="px-[162px] w-[960px] h-[897px] bg-[#F4F4F4]  items-center">
          <div className="h-[610px] flex flex-col justify-center mt-[150px]">
            <div className="">
              <h2 className="h2">We create opportunity to reach potential</h2>
              <p className="p mt-[18px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.{" "}
              </p>
            </div>
            <div className="flex mt-[61px]">
              <div className="mr-[72px]">
                <CircleText text="Safe Package" />
                <CircleText text="Global Tracking" />
                <CircleText text="In Time Delivery" />
              </div>
              <div>
                <CircleText text="Ship Everyware" />
                <CircleText text="24/7 Support" />
                <CircleText text="Transparant Pricing" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[134px] px-[360px]">
        <h2 className="h2 text-center mb-[30px]">Meet Expert Team</h2>
        <div className="flex justify-between">
          <TransportersCard
            name="Jessca Arow"
            img="https://imageup.me/images/91437713-34b6-4ffd-9f9a-5908824f2e4d.png"
          />
          <TransportersCard
            name="Kathleen Smith"
            img="https://imageup.me/images/e1b894fb-959c-4e10-ac45-640a89f23a4e.png"
          />
          <TransportersCard
            name="Rebecca Tylor"
            img="https://imageup.me/images/02f7319f-b25c-443d-b633-4668ec888a19.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
