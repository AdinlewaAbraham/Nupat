import React from "react";
import "../../../src/index.css";
import Tag from "./Tag";

const HeroComp = (p) => {
  return (
    <div className="flex relative">
      <div className=" px-[30px] mr-[25px] absolute">{p.icon}</div>
      <div className="border-r ml-[150px] mr-[25px]"></div>
      <div className="">
        <h2 className="font-[400] text-[25px] text-[#1C1F35]">{p.header}</h2>
        <p className="w-[270px] font-[500] text-[16px] text-[#666C89] leading-[24px]">
          Following the quality of our service thus having gained trust of our
          <br /> many clients.
        </p>
      </div>
    </div>
  );
};
const TransportImgCard = (p) => {
  return (
    <div
      className="w-[320px] h-[407px] mx-[8px] p-[25px] flex flex-col justify-end relative"
      style={{ background: `url(${p.imgsrc})` }}
    >
      <h4 className="font-[500] text-[20px] leading-[23px] text-white">
        {p.header}
      </h4>
      <p className="text-myYellow-100 font-[500] text-[16px] leading-[24px]">
        {p.paragraph}
      </p>
      <div className="gradsmall w-[320px] h-[407px] "></div>
    </div>
  );
};

const HeroOne = () => {
  return (
    <div className="text-white">
      <div
        className="bg-[url('https://i.ibb.co/9hm2ZSy/Photo.png')]
    h-[875px] w-[1920px] relative px-[360px]
    "
      >
        <div className="absolute top-[278px] w-[554px] ">
          <Tag text="Logistics & Supply Chain Solutions" dark={true}/>
          <h1 className="font-[700] text-[60px] leading-[71px] w-[550px]">
            Your Gateway <br /> to any Destination in the World
          </h1>
          <p className="font-[500] text-[16px] leading-[24.24px] mt-[6px] mb-[24px]">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>
          <button className="w-[194px] h-[60px] text-black bg-[url('https://i.ibb.co/zXQPYCD/Background.png')]">
            Explore More
          </button>
        </div>
      </div>
      <div className="px-[360px] text-black flex  mt-[80px]">
        <div>
          <Tag text="What We Do"/>
          <h2 className="font-[600] text-[35px] leading-[41px] w-[294px]">
            Safe & Reliable Cargo Solutions
          </h2>
        </div>
        <div>
          <div className="flex">
            <HeroComp
              header="Sea Transport Services"
              icon={
                <svg
                  width="84"
                  height="116"
                  viewBox="0 0 84 116"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.6602 7.16494V1"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M58.3195 35.9345C54.5692 49.035 37.2046 53.6073 34.1221 54.3265C33.8187 54.4037 33.5008 54.4037 33.1974 54.3265C30.1149 53.6073 12.7503 49.035 9 35.9345V27.1494C8.99996 26.7167 9.13652 26.295 9.39021 25.9445C9.64389 25.594 10.0018 25.3324 10.4128 25.1972L33.0176 17.6452C33.436 17.5164 33.8835 17.5164 34.3019 17.6452L56.9067 25.1972C57.3178 25.3324 57.6756 25.594 57.9293 25.9445C58.183 26.295 58.3195 26.7167 58.3195 27.1494V35.9345Z"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.1271 47.6652C31.6883 47.1036 17.9496 43.5341 14.9824 33.3066"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.9824 9.98267V23.136L33.5288 16.555L52.0752 23.136V9.98267C52.0752 8.32581 50.7321 6.98267 49.0752 6.98267H17.9824C16.3256 6.98267 14.9824 8.32581 14.9824 9.98267Z"
                    fill="#FFD550"
                    stroke="#1C1F35"
                    stroke-width="2"
                  />
                  <path
                    d="M33.6602 37.9898V17.5427"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.9141 36.8963L38.9141 28.5205"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.7686 17.7515V11.7688"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M56.8613 20.1446V9.37573"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
            <HeroComp
              header="Warehousing Services"
              icon={
                <svg
                  width="57"
                  height="46"
                  viewBox="0 0 57 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33398 45H54.7149"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.7147 45V2.91304C32.7147 2.40567 32.5097 1.91908 32.1448 1.56032C31.7799 1.20155 31.2851 1 30.7691 1H7.42214C6.90614 1 6.41128 1.20155 6.04641 1.56032C5.68154 1.91908 5.47656 2.40567 5.47656 2.91304V45"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.7148 13.5715H48.572C50.2288 13.5715 51.572 14.9147 51.572 16.5715V43.9525H32.7148V13.5715Z"
                    fill="#FFD550"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8574 10.4285H21.1908"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.28613 40.8096L1.28613 26.1429"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M55.7627 30.3333L55.7627 15.6666"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35.8574 9.38086L43.1908 9.38086"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 26.1428H24.3333"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.8574 35.5715H21.1908"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40.0479 35.5715H44.2383"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40.0479 26.1428H44.2383"
                    stroke="#141414"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex mt-[70px]">
            <HeroComp
              header="Air Fright Services"
              icon={
                <svg
                  width="76"
                  height="66"
                  viewBox="0 0 76 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3047 55.4348H53.1743"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.333 40.4766L49.855 31.1317"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.69531 37.8877L15.7105 43.9029"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 35.7139L7.01521 41.7291"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.7687 35.4434L25.2262 44.5155C26.4873 45.7266 28.0962 46.4883 29.8137 46.6874C31.5313 46.8865 33.2657 46.5124 34.759 45.6206L72.7396 23.0045L68.0735 17.1449C66.8598 15.6262 65.1558 14.6023 63.2695 14.2582C61.3832 13.9141 59.439 14.2726 57.7882 15.2688L46.6499 21.9765L31.5981 16.8365L27.4589 18.6612C27.1492 18.7971 26.8779 19.0108 26.6701 19.2824C26.4622 19.554 26.3244 19.8749 26.2694 20.2154C26.2144 20.556 26.244 20.9052 26.3554 21.2309C26.4669 21.5567 26.6565 21.8484 26.907 22.0793L34.6085 29.1725L27.5843 33.2845L20.5602 30.2005L16.3457 32.0509C16.0391 32.1859 15.7701 32.397 15.5632 32.6652C15.3563 32.9335 15.2179 33.2503 15.1606 33.5871C15.1034 33.9239 15.129 34.27 15.2351 34.5941C15.3413 34.9183 15.5247 35.2101 15.7687 35.4434V35.4434Z"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M68.9352 18.4781C62.9052 23.2141 56.9528 23.8094 52.6309 18.4781L56.0268 16.2707C60.2468 13.5277 65.8664 14.4886 68.9352 18.4781Z"
                    fill="#FFD550"
                    stroke="#1C1F35"
                    stroke-width="2"
                  />
                </svg>
              }
            />
            <HeroComp
              header="Local Shipping Services"
              icon={
                <svg
                  width="77"
                  height="126"
                  viewBox="0 0 77 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0713 28.7858V18.8215H47.6681C50.5026 18.8215 53.0574 20.5309 54.1387 23.1511L56.1791 28.0951C56.3149 28.4242 56.073 28.7858 55.7169 28.7858H42.0713Z"
                    fill="#FFD550"
                    stroke="#1C1F35"
                    stroke-width="2"
                  />
                  <path
                    d="M4.42871 35.4285H42.0716"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.3929 53.1431C49.0616 53.1431 52.0357 50.169 52.0357 46.5003C52.0357 42.8315 49.0616 39.8574 45.3929 39.8574C41.7241 39.8574 38.75 42.8315 38.75 46.5003C38.75 50.169 41.7241 53.1431 45.3929 53.1431Z"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.6067 53.1431C20.2755 53.1431 23.2496 50.169 23.2496 46.5003C23.2496 42.8315 20.2755 39.8574 16.6067 39.8574C12.938 39.8574 9.96387 42.8315 9.96387 46.5003C9.96387 50.169 12.938 53.1431 16.6067 53.1431Z"
                    fill="#FFD550"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.75 45.3926H23.25"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.90907 45.3926H6.31085C5.81168 45.3926 5.33295 45.1884 4.97998 44.8251C4.62701 44.4617 4.42871 43.9689 4.42871 43.4551V16.3301C4.42871 15.8162 4.62701 15.3234 4.97998 14.9601C5.33295 14.5967 5.81168 14.3926 6.31085 14.3926H42.0716V40.3551"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42.0713 28.7861H57.5713V43.548C57.5713 44.0374 57.3672 44.5068 57.0038 44.8528C56.6405 45.1989 56.1476 45.3933 55.6338 45.3933H51.8972"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.85742 28.0947L8.85742 18.8215"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.7854 31L38.0586 31"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.786 49.7148L32.1074 49.7148"
                    stroke="#1C1F35"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div className="relative w-[1920px] mt-[132px]">
        <img
          className="h-[504px] w-[1920px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/1ea3/0812/2e06fc2b2e1943593343f58fd83b63cb?Expires=1681084800&Signature=nBZ6ekw7ZtbMdAH5ZsL9uTJ6GhnqzZNJuLya7Pi-SCQwJjFwE9l5mVIacHzUcrXM7FA~1N~AeUVh5sfLzCZFJcqnAixVAbZi8n3fzs3WE6T-Wcb-3D2~qN8Qw~n5Ry6wYZoyCvaP6uh5ozRjMP~cvsLXfsuuVg4yyUNqqhTgqZ3U81HjkMgPHsOziJ6ehq0hSEnbLhLmcRI0J6DAubyTEAWIODcrqhUKHSVdLAq78HacHyxySfyTO1ZvRMqM~g1bYaqZRHzV0zhyCkfAFHZxxHcK0hpUPYDMh9awdRFjuqJvsmHRrv32PkMsBcg5Dab0XhcYieN5s8NLFOs2j9bVhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div className="grad h-[504px] w-[1920px]"></div>

        <div className="p-[86px] absolute top-[400px] left-[20%] bg-white w-[1200px] text-black mb-[100px] flex flex-row justify-between">
          <div className="w-[472px]">
            <Tag text="Why Us"/>
            <h2 className="text-[35px] font-[600] leading-[41px]">
              We provide full range global logistics solution
            </h2>
            <p className="text-[16px] font-[500] text-[#666C89] mt-[12px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. <br />
              <br /> Organically grow the holistic world view of disruptive
              innovation via workplace diversity and empowerment.
            </p>
            <div className="flex items-center mt-[25px]">
              <i>
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="29"
                    fill="url(#paint0_linear_1_4414)"
                  />
                  <path
                    d="M41 37.4598V24.5402C40.999 24.3536 40.9512 24.1705 40.8612 24.0095C40.7712 23.8484 40.6423 23.7151 40.4875 23.623L29.4875 17.1369C29.3393 17.0472 29.1711 17 29 17C28.8289 17 28.6607 17.0472 28.5125 17.1369L17.5125 23.623C17.3577 23.7151 17.2288 23.8484 17.1388 24.0095C17.0488 24.1705 17.001 24.3536 17 24.5402V37.4598C17.001 37.6464 17.0488 37.8295 17.1388 37.9905C17.2288 38.1516 17.3577 38.2849 17.5125 38.377L28.5125 44.8631C28.6607 44.9528 28.8289 45 29 45C29.1711 45 29.3393 44.9528 29.4875 44.8631L40.4875 38.377C40.6423 38.2849 40.7712 38.1516 40.8612 37.9905C40.9512 37.8295 40.999 37.6464 41 37.4598V37.4598Z"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35 34V27.0995L23 20"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41 24L29.1138 31L17 24"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 31V45"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4414"
                      x1="-1.64433"
                      y1="12.5667"
                      x2="71.3201"
                      y2="17.7482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </i>
              <p className="font-[400] text-[25px] ml-[15px]">
                Delivery on Time
              </p>
            </div>
            <div className="flex items-center mt-[22px]">
              <i>
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="29"
                    cy="29"
                    r="29"
                    fill="url(#paint0_linear_1_4422)"
                  />
                  <path
                    d="M42.9643 21H16.0357C15.4637 21 15 21.4477 15 22V36C15 36.5523 15.4637 37 16.0357 37H42.9643C43.5363 37 44 36.5523 44 36V22C44 21.4477 43.5363 21 42.9643 21Z"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.5 33C31.433 33 33 31.433 33 29.5C33 27.567 31.433 26 29.5 26C27.567 26 26 27.567 26 29.5C26 31.433 27.567 33 29.5 33Z"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36 21L44 28"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36 37L44 30"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 21L15 28"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23 37L15 30"
                    stroke="#1C1F35"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_4422"
                      x1="-1.64433"
                      y1="12.5667"
                      x2="71.3201"
                      y2="17.7482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FFB629" />
                      <stop offset="0.507189" stop-color="#FFDA56" />
                      <stop offset="1" stop-color="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
              </i>
              <p className="font-[400] text-[25px] ml-[15px]">
                Optimized Travel Cost
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="clipdiv bg-no-repeat w-[500px] h-[400px] absolute right-[-40px]"></div>
            <div className="clipdivTwo bg-no-repeat w-[300px] h-[200px] absolute top-[250px] right-[234px]"></div>
          </div>
        </div>
      </div>
      <div className="mt-[540px] text-black flex justify-center w-[1920px]">
        <div className="flex items-center border border-[#D4D4D4] border-x-0 py-[23px] px-[106px]">
          <span className="text-[50px] font-[600]"> 1294</span>{" "}
          <div className="w-[17px] h-[17px] mx-[16px] smallyellowgrad"></div>{" "}
          Delivered Packages
        </div>
        <div className="flex items-center  border border-[#D4D4D4] border-r-0 px-[106px]">
          <span className="text-[50px] font-[600]"> 3584</span>{" "}
          <div className="w-[17px] h-[17px] mx-[16px] smallyellowgrad"></div>{" "}
          Satisfied Clients
        </div>
      </div>
      <div className="text-black flex justify-center flex-col  w-[1920px]">
        <h2 className="text-center text-[35px] font-[600] leading-[41px] mt-[90px]">
          Transporting Across The World
        </h2>
        <div className="gradbutton relative  flex justify-center mt-[280px]">
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
          <button className="bg-[url('https://i.ibb.co/58DH6dc/Background.png')] absolute top-[190px] w-[194px] h-[60px] text-white">
            More Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
