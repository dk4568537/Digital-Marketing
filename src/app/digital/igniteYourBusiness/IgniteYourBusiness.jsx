"use client";
import SlickCarousel from "@/app/component/carousel";
import { VscArrowRight } from "react-icons/vsc";

const IgniteYourBusiness = () => {
  const services = [
    {
      id: 1,
      title: "SEO",
      image: "/images/Seoicon.png",
      description: [
        "Link Analysis",
        "URL optimization",
        "Brand Awareness",
        "Trackable",
      ],
    },
    {
      id: 2,
      title: "Google PCC",
      image: "/images/Googleicon.png",
      description: [
        "Cost-effective",
        "Trackable",
        "Instant Traffic",
        "More Leads",
      ],
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image: "/images/Socialmarketingicon.png",
      description: [
        "Improved rankings",
        "Brand recognization",
        "Higher conversion rates",
        "Increased traffic",
      ],
    },
    {
      id: 4,
      title: "Email Marketing",
      image: "/images/emailMarketingicon.png",
      description: [
        "More revenue",
        "Increase organic traffic",
        "Cost-effective",
        "Higher Credibility",
      ],
    },
    {
      id: 5,
      title: "Email Marketing",
      image: "/images/emailMarketingicon.png",
      description: [
        "More revenue",
        "Increase organic traffic",
        "Cost-effective",
        "Higher Credibility",
      ],
    },
    {
      id: 6,
      title: "Email Marketing",
      image: "/images/emailMarketingicon.png",
      description: [
        "More revenue",
        "Increase organic traffic",
        "Cost-effective",
        "Higher Credibility",
      ],
    },
  ];

  return (
    <div
      id="default-carousel"
      className="relative h-full w-full bg-[#6171b4] text-white"
      data-carousel="slide"
    >
      <div className="relative h-full overflow-hidden rounded-lg ">
        <h1 className="text-center uppercase text-sm md:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl pt-10 ">
          Ignite Your Business Growth with
        </h1>
        <h3 className="text-center uppercase text-sm md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold  ">
          Our Advanced Marketing Tools
        </h3>
        <h3 className=" text-center pt-10 px-3 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Thrive your business with world-class marketing strategies that can
          drive your business to new heights.
          <p className="text-center pb-10 px-3 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            From SEO optimization to content management we have diverse ways to
            make you successful.
          </p>
        </h3>

        <SlickCarousel>
          {services.map((service) => (
            <div
              key={service.id}
              className="flex justify-center items-center flex-col border rounded-md py-10 w-[100%]"
            >
              <div className="flex justify-center items-center flex-col">
                <img
                  className="h-[45px] w-[50px] lg:h-[50px] lg:w-[60px] xl:h-[60px] xl:w-[70px] 2xl:h-[80px] 2xl:w-[80px]"
                  src={service.image}
                  alt=""
                />
                <h1 className="font-bold font-sans text-2xl py-2">
                  {service.title}
                </h1>
              </div>
              <ul className="pb-4">
                {service.description.map((item, index) => (
                  <li key={index} className="font-sans">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex">
                <button>Read More</button>
                <a className="flex pl-1 text-center">
                  <VscArrowRight color="red" fontSize="20px" />
                </a>
              </div>
            </div>
          ))}
        </SlickCarousel>
      </div>
    </div>
  );
};
export default IgniteYourBusiness;
