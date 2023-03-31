import React from "react";
import Logo from "../logo/Logo";

const ContactCard = (p) => {
  return (
    <div className="flex items-center mt-[30px]">
      {p.img}
      <div className="ml-[14px]">
        <p className="text-[14px] font-[500] leading-[18px]">{p.type}</p>
        <p className="text-[14px] font-[500] leading-[18px]">{p.info}</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-myBlue-100 w-[1920px] text-white mt-[80px]">
      <div
        className=" bg-no-repeat bg-[url('https://i.ibb.co/XFCRxSY/Photo.png')]
        w-[1960px] h-[400px]
      "
      ></div>
      <div>
        <div className=" opac px-[360px] flex items-center h-[118px] relative">
          <div className="flex  bg-myBlue-100 py-[43px] pl-[50px]  pr-[171px] absolute top-0 left-[310px]">
            <Logo />{" "}
            <h2 className="ml-[9px] font-[600] text-[30px] leading-[35px]">
              TransitFlow
            </h2>
          </div>
          <ul className="flex ul ml-[335px]">
            <li>Pages</li>
            <li>Utility</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div className="px-[360px] flex mt-[40px]">
          <div>
            <p className="w-[319px] mb-[3px] text-[#E8E8E8] mr-[95px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
            <div>
        
              <ContactCard
                img={
                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.5"
                      cy="31.5"
                      r="31"
                      fill="#111C55"
                      stroke="#273270"
                    />
                    <path
                      d="M40.996 23H23.004C22.4495 23 22 23.3755 22 23.8387V37.1613C22 37.6245 22.4495 38 23.004 38H40.996C41.5505 38 42 37.6245 42 37.1613V23.8387C42 23.3755 41.5505 23 40.996 23Z"
                      stroke="#F6B426"
                    />
                    <path d="M22 23L32.4247 30L42 23.2294" stroke="#F6B426" />
                  </svg>
                }
                type="Email"
                info="contact@logistics.com"
              />
              <ContactCard
                img={
                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="31.5"
                      cy="31.5"
                      r="31"
                      fill="#111C55"
                      stroke="#273270"
                    />
                    <path
                      d="M23.9741 22.1408C23.8394 22.1449 23.7071 22.1743 23.5848 22.2272C23.4625 22.28 23.3528 22.3554 23.2622 22.4487C23.1715 22.542 23.1018 22.6514 23.0571 22.7704C23.0124 22.8894 22.9936 23.0156 23.0019 23.1416C23.1364 25.3015 23.7704 30.5716 26.8059 33.8583C30.4409 37.8181 35.1748 39.1824 40.0317 38.9808C40.292 38.9662 40.5368 38.8596 40.7165 38.6826C40.8962 38.5055 40.9975 38.2712 41 38.0268V34.5674C40.997 34.2446 40.8783 33.9322 40.663 33.6802C40.4476 33.4282 40.1482 33.2513 39.8127 33.1779L37.3804 32.6739C37.0796 32.6138 36.7664 32.6397 36.4815 32.7481C36.1965 32.8566 35.9528 33.0427 35.7819 33.2823L35.244 34.0454C35.1946 34.1153 35.1208 34.1668 35.0352 34.1911C34.9496 34.2154 34.8577 34.211 34.7752 34.1786C33.5379 33.6783 28.6081 31.5184 28.0663 27.8753C28.0557 27.805 28.0675 27.7333 28.1003 27.6692C28.1332 27.6051 28.1855 27.5516 28.2507 27.5154L29.2267 26.9574C29.4944 26.802 29.7047 26.5732 29.8291 26.3022C29.9535 26.0311 29.986 25.7308 29.9222 25.4419L29.3881 23.1236C29.31 22.7988 29.1142 22.5093 28.8339 22.3045C28.5537 22.0998 28.2064 21.9923 27.8511 22.0004L23.9741 22.1408Z"
                      stroke="#F6B426"
                    />
                  </svg>
                }
                type="call Us"
                info="(00) 112 365 489"
              />
            </div>
          </div>
          <div className="mr-[140px]">
            <ul className="inputspace">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Project</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="mr-[140px]">
            <ul className="inputspace">
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>Licenses</li>
              <li>Protected</li>
              <li>Not Found</li>
            </ul>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email here*"
              className="w-[317px] h-[60px] bg-[#091242] border border-[#4E5683] mb-[20px] pl-[30px]"
            />
            <div className="flex justify-between items-center">
              <button className="buttongrad w-[148px] h-[60px] text-black">
                Send Now
              </button>
              <div className="flex flex-row-reverse ispace">
                <i>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.4065 10.0578C21.4065 4.74704 16.8092 0.440918 11.1393 0.440918C5.4694 0.440918 0.87207 4.74704 0.87207 10.0578C0.87207 14.8576 4.62602 18.8362 9.53503 19.5583V12.8385H6.92743V10.0578H9.53503V7.93907C9.53503 5.52927 11.0682 4.19708 13.4132 4.19708C14.5366 4.19708 15.7119 4.38512 15.7119 4.38512V6.75199H14.4165C13.1418 6.75199 12.7431 7.49301 12.7431 8.25463V10.0578H15.5904L15.1357 12.8385H12.7435V19.5592C17.6525 18.8375 21.4065 14.8589 21.4065 10.0578Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5756 2.1537C18.8566 2.46592 18.0958 2.67161 17.3172 2.76428C18.1354 2.28554 18.7507 1.52498 19.0477 0.625233C18.2742 1.07722 17.4293 1.39436 16.5493 1.56306C16.1787 1.17497 15.733 0.866237 15.2393 0.65562C14.7456 0.445004 14.2143 0.336906 13.6775 0.337897C11.5041 0.337897 9.74533 2.06989 9.74533 4.20495C9.74379 4.50193 9.77785 4.79802 9.84677 5.08691C8.28834 5.0139 6.76231 4.61663 5.36632 3.92051C3.97033 3.22439 2.73512 2.24475 1.73972 1.04426C1.39051 1.63255 1.20583 2.30377 1.20497 2.98777C1.20497 4.32866 1.90506 5.51392 2.96217 6.20832C2.33586 6.19346 1.72238 6.02781 1.17382 5.72543V5.77332C1.17382 7.64898 2.53166 9.20937 4.32879 9.56455C3.99084 9.65458 3.64259 9.70019 3.29284 9.70024C3.04467 9.70067 2.79706 9.67661 2.55362 9.6284C3.05322 11.1648 4.5073 12.2823 6.22975 12.3142C4.83014 13.3921 3.11178 13.9746 1.34475 13.9704C1.0311 13.9699 0.717739 13.9512 0.40625 13.9145C2.20385 15.0615 4.29342 15.6682 6.42624 15.6624C13.6691 15.6624 17.6259 9.76808 17.6259 4.65591C17.6259 4.4883 17.6216 4.32068 17.6136 4.15706C18.3816 3.61115 19.046 2.93274 19.5756 2.1537Z"
                      fill="white"
                    />
                  </svg>
                </i>
                <i>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4415 0.291016H2.2354C1.34987 0.291016 0.576172 0.928181 0.576172 1.80331V18.0454C0.576172 18.9253 1.34987 19.7094 2.2354 19.7094H18.4367C19.327 19.7094 19.9945 18.9201 19.9945 18.0454V1.80331C19.9997 0.928181 19.327 0.291016 18.4415 0.291016ZM6.59543 16.4772H3.81358V7.82777H6.59543V16.4772ZM5.30073 6.51269H5.28079C4.39049 6.51269 3.81401 5.84996 3.81401 5.02034C3.81401 4.17555 4.40566 3.52842 5.3159 3.52842C6.22613 3.52842 6.78311 4.17079 6.80305 5.02034C6.80262 5.84996 6.22613 6.51269 5.30073 6.51269ZM16.7623 16.4772H13.9805V11.7478C13.9805 10.6148 13.5756 9.84069 12.5692 9.84069C11.8002 9.84069 11.3451 10.3608 11.1427 10.8675C11.0669 11.0496 11.0465 11.2975 11.0465 11.5506V16.4772H8.26463V7.82777H11.0465V9.03145C11.4513 8.45496 12.0837 7.62535 13.5553 7.62535C15.3814 7.62535 16.7628 8.82903 16.7628 11.4241L16.7623 16.4772Z"
                      fill="white"
                    />
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-myBlue-100  border-t flex items-center justify-between mt-[48px] px-[360px] w-[1920px] py-[15px] h-[73px]">
        <p>
          Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.
        </p>
        <ul className="inputspacey flex text-[#8388A7]">
          <li>Style Guide </li>
          <li> Licenses </li>
          <li>Changelog </li>
          <li>Password</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
